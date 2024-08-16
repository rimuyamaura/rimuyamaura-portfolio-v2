import { Box, Typography } from '@mui/material';

const ProjectsPage = () => {
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
          Projects
        </Typography>
      </Box>
    </Box>
  );
};
export default ProjectsPage;
