import { Outlet } from 'react-router-dom';
import { useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeToggleBox, EmailTag, SocialsTag } from '../components';

const PageLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        id='Background'
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.default,
          transition: 'background-color 1s ease',
        }}
      >
        <Box
          id='Frame'
          component={motion.div}
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
            position: 'fixed',
            padding: '20px',
            transition: 'background-color 3s ease',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          ParticleRing Header
          <Outlet />
          SocialsBar Themetoggle Email
          <ThemeToggleBox />
          <SocialsTag />
          <EmailTag />
        </Box>
      </Box>
    </>
  );
};
export default PageLayout;
