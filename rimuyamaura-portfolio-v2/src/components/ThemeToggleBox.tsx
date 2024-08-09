import {
  Box,
  Checkbox,
  FormControlLabel,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { useAppDispatch, useAppSelector } from '../store';
import { toggleTheme } from '../features/userSlice';

const ThemeToggleBox = () => {
  const dispatch = useAppDispatch();
  const { palette } = useTheme();
  const { isDarkMode } = useAppSelector((state) => state.userState);
  const isXsScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 'calc(100vh - 25px)', lg: 'calc(100vh - 37.5px)' },
          right: { xs: '25px', lg: '37.5px' },
          width: 'auto',
          display: 'flex',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              icon={<SquareIcon />}
              checkedIcon={<SquareIcon />}
              checked={!isDarkMode}
              onChange={handleThemeToggle}
              size='small'
              sx={{
                padding: '0',
                transform: 'scale(0.8)',
                '&.Mui-checked': {
                  color: isDarkMode
                    ? palette.secondary.main
                    : palette.secondary[700],
                },
              }}
            />
          }
          label={
            <Typography
              fontSize='small'
              sx={{
                marginTop: '1px',
              }}
            >
              {isXsScreen ? 'LIGHT' : 'LIGHT THEME'}
            </Typography>
          }
          sx={{
            margin: '0',
            pr: '10px',
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<SquareIcon />}
              checkedIcon={<SquareIcon />}
              checked={isDarkMode}
              onChange={handleThemeToggle}
              size='small'
              sx={{
                padding: '0',
                transform: 'scale(0.8)',
                '&.Mui-checked': {
                  color: isDarkMode
                    ? palette.secondary.main
                    : palette.secondary[700],
                },
              }}
            />
          }
          label={
            <Typography
              fontSize='small'
              sx={{
                marginTop: '1px',
              }}
            >
              {isXsScreen ? 'DARK' : 'DARK THEME'}
            </Typography>
          }
          sx={{ margin: '0' }}
        />
      </Box>
    </>
  );
};
export default ThemeToggleBox;
