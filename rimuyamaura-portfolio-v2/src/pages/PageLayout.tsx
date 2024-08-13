import { Outlet } from 'react-router-dom';
import { useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeToggleBox, EmailTag, SocialsTag, Header } from '../components';

const PageLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        id='Background'
        component={motion.div}
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.default,
          transition: 'background-color 2s ease-out',
        }}
        // // Page fade in animation
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 3 }}
      >
        <Box
          id='Frame'
          sx={{
            height: {
              xs: 'calc(100vh - 50px)',
              lg: 'calc(100vh - 75px)',
            },
            width: {
              xs: 'calc(100vw - 50px)',
              lg: 'calc(100vw - 75px)',
            },
            border: '1px solid',
            borderColor: theme.palette.background.alt,
            position: 'relative',
            padding: { xs: '12px', lg: '20px' },
            // Text color transition
            transition: 'color 1s ease-out',
            overflow: 'auto',
          }}
        >
          <Header />
          <Box
            id='wrapper'
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: {
                xs: 'calc(100vw - 50px)',
                lg: 'calc(100vw - 75px)',
              },
              height: '75%',
              padding: { xs: '12px', lg: '20px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Outlet />
          </Box>
          <ThemeToggleBox />
          <SocialsTag />
          <EmailTag />
        </Box>
      </Box>
    </>
  );
};
export default PageLayout;
