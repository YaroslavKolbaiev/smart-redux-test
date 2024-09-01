import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import * as usersActions from './redux/features/usersSlice';
import UsersTable from './components/UsersTable';

function App() {
  const dispatch = useAppDispatch();

  const { fetchUsers } = usersActions;

  const { loaded } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <main>
      <h1>Welcome to Redux Table of Users</h1>

      {loaded
        ? <UsersTable />
        : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}
    </main>
  );
}

export default App;
