import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch } from '../redux/hooks';
import UsersTableBody from './UsersTableBody';
import {
  filterByName,
  filterByUsername,
  filterByEmail,
  filterByPhone,
} from '../redux/features/filtersSlice';
import SearchCell from './SearchCell';

export default function UsersTable() {
  const dispatch = useAppDispatch();

  const handleFilterByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByName(e.target.value));
  };

  const handleFilterByUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByUsername(e.target.value));
  };

  const handleFilterByEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByEmail(e.target.value));
  };

  const handleFilterByPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByPhone(e.target.value));
  };

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="users table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <h3>ID</h3>
            </TableCell>

            <SearchCell
              label="Name"
              filter={handleFilterByName}
            />

            <SearchCell
              label="Username"
              filter={handleFilterByUsername}
            />

            <SearchCell
              label="Email"
              filter={handleFilterByEmail}
            />

            <SearchCell
              label="Phone"
              filter={handleFilterByPhone}
            />
          </TableRow>
        </TableHead>

        <UsersTableBody />
      </Table>
    </TableContainer>

  );
}
