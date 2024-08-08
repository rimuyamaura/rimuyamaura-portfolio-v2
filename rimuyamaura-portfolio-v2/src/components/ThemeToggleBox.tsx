import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store';
import { toggleTheme } from '../features/userSlice';

const ThemeToggleBox = () => {
  const dispatch = useAppDispatch();

  const isDarkMode = useAppSelector((state) => state.userState);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          width: 'auto',
          height: 'auto',
          margin: '0',
          padding: '0',
          bottom: { xs: 'calc(100vh - 25px)', md: 'calc(100vh - 37.5px)' },
          right: { xs: '25px', md: '37.5px' },

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='LIGHT MODE'
        />
        <FormControlLabel control={<Checkbox />} label='DARK MODE' />
      </Box>
    </>
  );
};
export default ThemeToggleBox;
