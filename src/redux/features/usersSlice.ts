import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import getUsers from '../../api/getUsers';
import User from '../../types';

type FilterPayload = {
  nameFilter: string,
  usernameFilter: string,
  emailFilter: string,
  phoneFilter: string
};

type UsersState = {
  filteredUsers: User[];
  originalUsers: User[];
  loaded: boolean;
  hasError: boolean;
};

const initialState: UsersState = {
  filteredUsers: [],
  originalUsers: [],
  loaded: false,
  hasError: false,
};

export const fetchUsers = createAsyncThunk('users/fetch', async () => getUsers());

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<FilterPayload>) => {
      const {
        nameFilter, usernameFilter, emailFilter, phoneFilter,
      } = action.payload;

      state.filteredUsers = state.originalUsers.filter((user) => {
        const nameMatch = user.name.toLowerCase().includes(nameFilter.toLowerCase());
        const usernameMatch = user.username.toLowerCase().includes(usernameFilter.toLowerCase());
        const emailMatch = user.email.toLowerCase().includes(emailFilter.toLowerCase());
        const phoneMatch = user.phone.toLowerCase().includes(phoneFilter.toLowerCase());
        return nameMatch && usernameMatch && emailMatch && phoneMatch;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loaded = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.hasError = false;
      state.originalUsers = action.payload;
      state.filteredUsers = action.payload;
      state.loaded = true;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loaded = true;
      state.hasError = true;
    });
  },
});

export const { filter } = usersSlice.actions;
export default usersSlice.reducer;
