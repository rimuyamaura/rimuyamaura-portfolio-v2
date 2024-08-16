import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box>
      <Box id='title'>
        <Typography
          variant='overline'
          sx={{
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1rem',
          }}
        >
          About
        </Typography>
      </Box>
    </Box>
  );
};
export default AboutPage;
