import { Drawer, Box, Typography, Link, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../assets/projects';
import CloseIcon from '@mui/icons-material/Close';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';

interface ProjectDrawerProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectDrawer = ({ open, onClose, project }: ProjectDrawerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  // Handle image navigation
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.img.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + project.img.length) % project.img.length
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <Drawer
          anchor='left'
          open={open}
          onClose={onClose}
          sx={{
            '& .MuiDrawer-paper': {
              width: { xs: '100%', md: '45%' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'background.default',
              paddingX: { xs: '5vw', md: '2vw' },
              // paddingTop: '5vh',
            },
          }}
          PaperProps={{
            component: motion.div,
            initial: { opacity: 0, x: '-100%' },
            animate: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: 'easeOut' },
            },
            exit: {
              opacity: 0,
              x: '-100%',
              transition: { duration: 0.3, ease: 'easeIn' },
            },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant='h4'
              sx={{
                fontSize: { xs: '1rem', lg: '2rem' },
                textTransform: 'uppercase',
                letterSpacing: '0.5rem',
                overflow: 'hidden',
              }}
            >
              {project.title}
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                backgroundColor: 'transparent',
                '&:hover': {
                  color: 'red',
                  backgroundColor: 'transparent',
                },
                transition: 'color 0.3s ease-out',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography
            variant='button'
            sx={{
              fontSize: { xs: '0.5rem', lg: '0.9rem' },
              textTransform: 'uppercase',
              color: 'primary.main',
              marginY: '2vh',
            }}
          >
            {project.tech}
          </Typography>

          <Box
            sx={{
              width: '100%',
              // Use padding-bottom to maintain aspect ratio as all images are 16:9
              position: 'relative',
              paddingBottom: '56.25%', // calc 9 / 16 * 100
              marginBottom: '5vh',
            }}
          >
            <Box
              component='img'
              src={project.img[currentIndex]}
              alt={project.title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                border: '1px solid',
                borderColor: 'primary.light',
              }}
            />

            {/* Navigation buttons */}
            {project.img.length > 1 && (
              <>
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    zIndex: 1,
                    color: 'primary.main',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    zIndex: 1,
                    color: 'primary.main',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}
          </Box>

          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.7rem', lg: '0.8rem' },
              lineHeight: { xs: '1.1rem', lg: '1.5rem' },
              textAlign: 'justify',
              mb: '7vh',
            }}
          >
            {project.text}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              fontSize: { xs: '1.2rem', lg: '1.5rem' },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.7rem', lg: '0.8rem' },
                textTransform: 'uppercase',
                letterSpacing: '0.1rem',
                color: 'primary.main',
                marginBottom: '2px',
              }}
            >
              {project.url ? 'Visit Website ' : 'Visit Repository '}
              <Typography
                component='span'
                sx={{
                  fontSize: { xs: '0.7rem', lg: '0.8rem' },
                  marginX: { xs: '0.5vh', lg: '1vh' },
                }}
              >
                //
              </Typography>
            </Typography>
            {project.url && (
              <Link
                href={project.url}
                target='_blank'
                rel='noreferrer'
                sx={{
                  marginX: { xs: '0.5vh', lg: '1vh' },
                  color: 'secondary.main',
                  '&:hover': {
                    color: 'secondary.light',
                  },
                  transition: 'color 0.3s ease-out',
                }}
              >
                <FiExternalLink />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                rel='noreferrer'
                sx={{
                  marginX: { xs: '0.5vh', lg: '1vh' },
                  color: 'inherit',
                  '&:hover': {
                    color: 'primary.light',
                  },
                  transition: 'color 0.3s ease-out',
                }}
              >
                <FaGithubSquare />
              </Link>
            )}
          </Box>
        </Drawer>
      )}
    </AnimatePresence>
  );
};

export default ProjectDrawer;
