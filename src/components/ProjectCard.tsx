import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ProjectDrawer } from '.';
import { Project } from '../assets/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        id='projectCard'
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: project.id * 0.1,
          ease: 'easeOut',
        }}
        onClick={() => setOpen(true)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          // height: '15vh',
          height: '125px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'start',
          marginBottom: '0.5vh',
          cursor: 'pointer',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: palette.primary.main,
            // Increase image opacity on card hover
            '& .imageBackground': {
              opacity: 0.7,
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            right: 100,
            zIndex: 1,
          }}
        >
          <Box
            sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1rem', lg: '2rem' },
                paddingBottom: '1vh',
                whiteSpace: 'nowrap',
              }}
            >
              {project.title}
            </Typography>
            <Typography
              variant='caption'
              sx={{
                fontSize: { xs: '0.55rem', lg: '0.75rem' },
                fontWeight: '500',
                marginLeft: { xs: '0.5rem', lg: '1rem' },
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {project.tech}
            </Typography>
          </Box>
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.6rem', fontWeight: '500', lg: '0.75rem' },
            }}
          >
            {project.description}
          </Typography>
        </Box>
        <Box
          className='imageBackground'
          sx={{
            width: '50%',
            height: '10vh',
            background: `url(${project.img[0]}) no-repeat top center/cover`,
            position: 'absolute',
            right: 0,
            opacity: 0.3,
            transition: 'opacity 0.3s ease',
          }}
        ></Box>
      </Box>
      <ProjectDrawer
        project={project}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
