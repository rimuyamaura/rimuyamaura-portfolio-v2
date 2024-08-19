import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box
      id='container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'end',
        width: { xs: '100%', sm: '50%' },
        height: '100%',
        marginY: '10vh',
        animation: 'fadeInText 0.6s ease-in-out',
        '@keyframes fadeInText': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        zIndex: 5,
      }}
    >
      <Box id='title'>
        <Typography
          variant='overline'
          sx={{
            fontSize: { xs: '1rem', lg: '2rem' },
            textTransform: 'uppercase',
            letterSpacing: '1rem',
            overflow: 'hidden',
          }}
        >
          About
        </Typography>
      </Box>

      <Box
        id='content'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          width: '100%',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '50%' },
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: '1.5rem',
              textAlign: 'justify',
              textAlignLast: 'right',
            }}
          >
            I am a 23-year-old software developer who graduated in May 2024 from
            the University of Auckland with a bachelor's degree in computer
            science.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', lg: '85%' },
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
          }}
        >
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.5rem', lg: '2rem' },
            }}
          >
            Languages and Technologies:
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutPage;
