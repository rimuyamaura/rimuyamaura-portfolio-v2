import { Box, Typography } from '@mui/material';
import { Icons } from '../components';
import { languages, technologies } from '../components/Icons';
import profile from '../assets/images/greyscale.png';

const AboutPage = () => {
  return (
    <Box
      id='container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: { xs: '12px', lg: '20px' },
        width: { xs: '100%', sm: '50%' },
        height: { xs: '75%', sm: '70%' },
        animation: 'fadeInText 0.6s ease-in-out',
        '@keyframes fadeInText': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        zIndex: 5,
        overflowX: 'hidden',
        overflowY: 'auto',
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
            width: { xs: '100%', lg: '85%' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box
              id='profilePic'
              component='img'
              src={profile}
              sx={{
                width: { xs: '10vh', lg: '15vh' },
                height: { xs: '10vh', lg: '15vh' },
                marginRight: { xs: '1rem', lg: '2rem' },
                marginLeft: { xs: '0', lg: '2rem' },
              }}
            />
            <Typography
              variant='body2'
              sx={{
                fontSize: { xs: '0.7rem', lg: '0.8rem' },
                lineHeight: { xs: '1.1rem', lg: '1.5rem' },
                textAlign: 'justify',
              }}
            >
              I am a 23-year-old software developer who graduated in May 2024
              from the University of Auckland with a bachelor's degree in
              computer science.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: { xs: '100%', lg: '40%' } }}>
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.1rem', lg: '1.5rem' },
              textAlign: 'justify',
              textAlignLast: 'right',
            }}
          >
            Based in Auckland, New Zealand, I am a full-stack developer
            proficient in languages such as JavaScript, TypeScript and C#. Being
            fluent in Japanese and English, I enjoy collaborative environments
            and am seeking for opportunities to build on my skill set.
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant='body2'
              sx={{
                fontSize: { xs: '0.7rem', lg: '0.8rem' },
                lineHeight: { xs: '1.5rem', lg: '2rem' },
              }}
            >
              Languages and Technologies:
            </Typography>
            <Icons items={languages} />
          </Box>

          <Box>
            <Icons items={technologies} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutPage;
