import { Box, Typography } from '@mui/material';

const ContactPage = () => {
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
          Contact
        </Typography>
      </Box>
    </Box>
  );
};
export default ContactPage;
