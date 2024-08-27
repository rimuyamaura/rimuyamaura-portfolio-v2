import { Box, Typography } from '@mui/material';
import { ProjectCard } from '../components';
import { projects } from '../assets/projects';

const ProjectsPage = () => {
  return (
    <Box
      id='container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'end',
        width: { xs: '100%', sm: '50%' },
        height: { xs: '80%', sm: '100%' },
        animation: 'fadeInText 0.6s ease-in-out',
        '@keyframes fadeInText': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        zIndex: 5,
      }}
    >
      <Box
        id='title'
        sx={{
          marginY: { xs: '0', sm: '4vh' },
          padding: { xs: '12px', lg: '20px' },
        }}
      >
        <Typography
          variant='overline'
          sx={{
            fontSize: { xs: '1rem', lg: '2rem' },
            textTransform: 'uppercase',
            letterSpacing: '1rem',
          }}
        >
          Projects
        </Typography>
      </Box>
      <Box
        id='content'
        sx={{
          width: { xs: '100%', lg: '100%' },
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: { xs: '12px', lg: '20px' },
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </Box>
    </Box>
  );
};
export default ProjectsPage;
