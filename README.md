# React Redux Table of Users

[DEMO_LINK](https://smart-redux-test.vercel.app/)

This application is built using React and Redux Toolkit to fetch and display user data from an API. The application leverages Material-UI for styling, providing a modern and responsive user interface. The core functionality includes fetching user data, displaying it in a table, and offering advanced filtering options to refine the displayed results.

## Key Features:

- Data Fetching:

  - Utilizes Redux Toolkit's createAsyncThunk to handle      asynchronous API calls for fetching user data.

  - The fetched data is stored in the Redux state, ensuring a  centralized and consistent data management approach.

- State Management:

  - The application uses Redux Toolkit's createSlice to define the state and reducers.
  - The state includes properties for storing the original and filtered user data, as well as flags for loading and error states.

- Advanced Filtering:

  - Users can filter the displayed data based on multiple criteria such as name, username, email, and phone number.
  - The filtering logic is implemented in a Redux reducer, which updates the filtered user list based on the provided filter values.

- User Interface:

  - The application is styled using Material-UI, ensuring a clean and professional look.
  - The user data is displayed in a Material-UI DataGrid, providing features like sorting and pagination out of the box.
  - Filter inputs are styled using Material-UI components like TextField and FormHelperText.