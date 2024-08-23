import terramagotchiImg from '../assets/images/terramagotchi.png';
import socialImg from '../assets/images/social.png';
import joblogImg from '../assets/images/job-log.png';
import comfyImg from '../assets/images/comfy.png';
import portfolioImg from '../assets/images/portfolio.png';
import musicImg from '../assets/images/music.png';
import { Box, Link, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  img: string;
  url: string | null;
  github: string | null;
  title: string;
  tech: string;
  text: string;
}
const projects: Project[] = [
  {
    id: 1,
    img: terramagotchiImg,
    url: 'https://terramagotchi-trofik-edition.web.app',
    github: null,
    title: 'Terramagotchi Trofik Edition',
    tech: 'JavaScript, Google Firebase',
    text: 'Interactive JavaScript simulation where users can observe the diverse elements within the soil ecosystem.',
  },
  {
    id: 2,
    img: socialImg,
    url: 'https://social-app-b8kg.onrender.com',
    github: 'https://github.com/rimuyamaura/social-app',
    title: 'Social-App',
    tech: 'React JS, Express.js, MongoDB, Socket.IO',
    text: 'Social media application with realtime chat. Built using React, Express.js and MongoDB.',
  },
  {
    id: 3,
    img: joblogImg,
    url: 'https://job-log-fndaada8cth3f8bh.australiacentral-01.azurewebsites.net/',
    github: 'https://github.com/rimuyamaura/job-log',
    title: 'Job-Log',
    tech: 'React TS, .NET, Azure',
    text: 'React Typescript and .NET app for tracking and displaying job application statistics.',
  },
  {
    id: 4,
    img: comfyImg,
    url: 'https://ry-comfy-store.netlify.app',
    github: 'https://github.com/rimuyamaura/comfy-store',
    title: 'Comfy Store',
    tech: 'React JS, TailwindCSS, DaisyUI',
    text: 'Webpage with online store functionalities. Constructed via React with Tailwindcss using provided api.',
  },
  {
    id: 5,
    img: portfolioImg,
    url: 'https://rimuyamaura.netlify.app',
    github: 'https://github.com/rimuyamaura/rimuyamaura-portfolio',
    title: 'Portfolio Website',
    tech: '',
    text: 'My personal portfolio website. Built with React and DaisyUI.',
  },
  {
    id: 6,
    img: musicImg,
    url: null,
    github: 'https://github.com/rimuyamaura/music-library',
    title: 'Music Library',
    tech: 'Python, Flask, SQLalchemy',
    text: "Flask app where you can view and organize tracks from a library of music. Allowing CRUD operations on the user's collection.",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const { palette } = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: project.id * 0.1,
        ease: 'easeOut',
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '15vh',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'start',
        marginBottom: '0.5vh',
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
        <Link
          href={project.url}
          target='_blank'
          rel='noreferrer'
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              textDecorationColor: palette.primary.main,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', lg: '2rem' },
              paddingBottom: '1vh',
            }}
          >
            {project.title}
            <Typography
              variant='caption'
              sx={{
                fontSize: { xs: '0.55rem', lg: '0.75rem' },
                fontWeight: '500',
                marginLeft: { xs: '0.5rem', lg: '1rem' },
              }}
            >
              {project.tech}
            </Typography>
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontSize: { xs: '0.6rem', fontWeight: '500', lg: '0.75rem' },
            }}
          >
            {project.text}
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          width: '50%',
          height: '10vh',
          background: `url(${project.img}) no-repeat top center/cover`,
          position: 'absolute',
          right: 0,
          opacity: 0.5,
        }}
      ></Box>
    </Box>
  );
};

export default ProjectCard;
export { projects };
