import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeToggleBox, EmailTag, SocialsTag } from '../components';
import { useRouteError, Link as RouterLink } from 'react-router-dom';

const ErrorPage = () => {
  const error: { status: number } = useRouteError() as { status: number };

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
          backgroundColor: 'background.default',
          transition: 'background-color 2s ease-out',
        }}
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
            borderColor: 'background.alt',
            position: 'relative',
            padding: { xs: '12px', lg: '20px' },
            // Text color transition
            transition: 'color 1s ease-out',
            overflow: 'auto',
          }}
        >
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
              height: '100%',
              paddingY: { xs: '20vh', lg: '30vh' },
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: '2rem', sm: '3rem', lg: '5rem' },
                fontFamily: 'Libre Barcode 39 Text',
              }}
            >
              {error.status == 404 ? '404 Page Not Found' : 'An error occurred'}
            </Typography>

            <Typography
              variant='body1'
              sx={{
                fontSize: { xs: '0.6rem', lg: '0.75rem' },
                marginTop: '1.5vh',
              }}
            >
              {error.status == 404
                ? "Sorry, we couldn't find the page you're looking for."
                : 'Please try again later'}
            </Typography>
            <Box
              sx={{
                height: 'auto',
                marginY: '15vh',
              }}
            >
              <RouterLink
                to='/'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', lg: '1.5rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.2rem',
                    textDecoration: 'underline',
                    '&:hover': {
                      color: 'primary.light',
                      transition: 'color 0.3s ease-out',
                    },
                  }}
                >
                  Return to Home
                </Typography>
              </RouterLink>
            </Box>
          </Box>
          <ThemeToggleBox />
          <SocialsTag />
          <EmailTag />
        </Box>
      </Box>
    </>
  );
};
export default ErrorPage;
