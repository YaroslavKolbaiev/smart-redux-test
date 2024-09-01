import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
  nameFilter: string;
  usernameFilter: string;
  emailFilter: string;
  phoneFilter: string;
};

const initialState: FiltersState = {
  nameFilter: '',
  usernameFilter: '',
  emailFilter: '',
  phoneFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      state.nameFilter = action.payload;
    },
    filterByUsername: (state, action: PayloadAction<string>) => {
      state.usernameFilter = action.payload;
    },
    filterByEmail: (state, action: PayloadAction<string>) => {
      state.emailFilter = action.payload;
    },
    filterByPhone: (state, action: PayloadAction<string>) => {
      state.phoneFilter = action.payload;
    },
  },
});

export const {
  filterByName,
  filterByUsername,
  filterByEmail,
  filterByPhone,
} = filtersSlice.actions;

export default filtersSlice.reducer;
