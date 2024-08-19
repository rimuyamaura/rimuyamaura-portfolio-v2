import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      id='container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'end',
        width: '50%',
        height: '100%',
        marginY: '20vh',
        animation: 'fadeInText 0.6s ease-in-out',
        '@keyframes fadeInText': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        zIndex: 5,
      }}
    >
      <Box id='title' sx={{ marginBottom: '10vh' }}>
        <Typography
          variant='overline'
          sx={{
            fontSize: { xs: '1rem', lg: '2rem' },
            textTransform: 'uppercase',
            letterSpacing: '1rem',
          }}
        >
          Welcome
        </Typography>
      </Box>
      <Box id='content' sx={{ width: { xs: '100%', lg: '75%' } }}>
        <Typography
          variant='body2'
          sx={{
            fontSize: { xs: '0.7rem', lg: '0.8rem' },
            lineHeight: { xs: '1.5rem', lg: '2rem' },
            textAlign: 'justify',
            textAlignLast: 'right',
          }}
        >
          Thank you for visiting my portfolio website! Here you will find a
          collection of my work, thoughts and projects, offering insight into
          who I am and what i'm passionate about.
        </Typography>
      </Box>
    </Box>
  );
};
export default HomePage;
