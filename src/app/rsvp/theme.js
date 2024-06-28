import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            color: "#ff5331", // Customize the error color here
            fontSize: '1.2rem'
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            borderColor: "#ff5331", // Customize the error color for input borders
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0px', // Remove corner radius for all input boxes
        },
        notchedOutline: {
          borderRadius: '0px', // Ensure the notched outline also has no radius
        },
      },
    },
  },
});

export default theme;