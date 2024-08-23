import { Box, Typography, Link } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import cv from '../assets/CV.pdf';
import transcript from '../assets/AcademicTranscript.pdf';
import ambassadorChallenge from '../assets/AmbassadorChallengeCertificate.pdf';

const ContactPage = () => {
  return (
    <Box
      id='container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'end',
        padding: { xs: '12px', lg: '20px' },
        width: { xs: '100%', sm: '50%' },
        height: { xs: '75%', sm: '85%' },
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
          Contact
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
            }}
          >
            For any inquiries, please contact me via email at {''}
            <Link href='mailto:rimuyamaura@gmail.com'>
              rimuyamaura@gmail.com
            </Link>
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
            View my qualifications:
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.5rem', lg: '2rem' },
            }}
          >
            <Link href={transcript} target='_blank' rel='noreferrer'>
              University of Auckland Academic Transcript
              <ArrowOutwardIcon fontSize='inherit' />
            </Link>
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.5rem', lg: '2rem' },
            }}
          >
            <Link href={ambassadorChallenge} target='_blank' rel='noreferrer'>
              Microsoft Ambassador Challenge: Embark on Azure Mastery
              <ArrowOutwardIcon fontSize='inherit' />
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', lg: '75%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.5rem', lg: '2rem' },
            }}
          >
            <Link
              href='https://github.com/rimuyamaura'
              target='_blank'
              rel='noreferrer'
            >
              Github <ArrowOutwardIcon fontSize='inherit' />
            </Link>
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.5rem', lg: '2rem' },
            }}
          >
            <Link
              href='https://www.linkedin.com/in/rimu-yamaura-2a080b254/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
              <ArrowOutwardIcon fontSize='inherit' />
            </Link>
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.5rem', lg: '2rem' },
            }}
          >
            <Link href={cv} target='_blank' rel='noreferrer'>
              View my Resume <ArrowOutwardIcon fontSize='inherit' />
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
