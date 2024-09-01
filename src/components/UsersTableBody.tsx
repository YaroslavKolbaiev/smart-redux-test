import { TableRow, TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { filter } from '../redux/features/usersSlice';

export default function UsersTableBody() {
  const dispatch = useAppDispatch();

  const { filteredUsers } = useAppSelector((state) => state.users);

  const {
    nameFilter,
    usernameFilter,
    emailFilter,
    phoneFilter,
  } = useAppSelector((state) => state.filters);

  useEffect(() => {
    dispatch(filter({
      nameFilter, usernameFilter, emailFilter, phoneFilter,
    }));
  }, [nameFilter, usernameFilter, emailFilter, phoneFilter]);

  return (
    <TableBody>
      {filteredUsers.map(({
        id, name, username, email, phone,
      }) => (
        <TableRow
          key={id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>{id}</TableCell>

          <TableCell>{name}</TableCell>

          <TableCell>{username}</TableCell>

          <TableCell>{email}</TableCell>

          <TableCell>{phone}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
