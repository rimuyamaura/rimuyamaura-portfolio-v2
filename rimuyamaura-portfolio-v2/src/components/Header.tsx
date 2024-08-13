import { AppBar, Toolbar, Typography } from '@mui/material';
import { Navbar } from '.';

const Header = () => {
  return (
    <AppBar id='Header' position='static' color='transparent' elevation={0}>
      <Toolbar
        disableGutters
        sx={{
          flexDirection: 'column',
          alignItems: 'start',
          padding: 0,
          zIndex: 10,
        }}
      >
        <Typography
          variant='h1'
          sx={{
            fontSize: { xs: '3rem', lg: '8rem' },
            fontFamily: 'Libre Barcode 39 Text',
          }}
        >
          Rimu Yamaura
        </Typography>
        <Typography
          variant='body2'
          sx={{
            fontSize: { xs: '0.5rem', lg: '0.75rem' },
            textTransform: 'uppercase',
            paddingLeft: { xs: 0, lg: 1 },
            paddingBottom: { xs: 2, lg: 4 },
            letterSpacing: '0.2rem',
          }}
        >
          Graduate software developer
        </Typography>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
