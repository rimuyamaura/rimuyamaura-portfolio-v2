import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ProjectDrawer } from '.';
import terramagotchiImg from '../assets/images/terramagotchi.png';
import socialImg from '../assets/images/social.png';
import joblogImg from '../assets/images/job-log.png';
import comfyImg from '../assets/images/comfy.png';
import portfolioImg from '../assets/images/portfolio.png';
import musicImg from '../assets/images/music.png';

export interface Project {
  id: number;
  img: string;
  url: string | null;
  github: string | null;
  title: string;
  tech: string;
  description: string;
  text: string;
}

const projects: Project[] = [
  {
    id: 1,
    img: terramagotchiImg,
    url: 'https://terramagotchi-trofik-edition.web.app',
    github: null,
    title: 'Terramagotchi Trofik Edition',
    tech: 'JavaScript, TailwindCSS, Google Firebase',
    description:
      'Interactive simulation where users can observe the diverse elements within the soil ecosystem.',
    text: 'Terramagotchi Trōfik edition is a minimally interactive 2D web application showcasing the intricacies of the elements beneath the soil. Our goal is to educate users by illustrating the interactions among the elements in the soil ecosystem as users can watch how the plants and their root systems develop over time. The application comes in two parts, the main application featuring the 2D canvas, and a remote application accessible through the QR code displayed on the main interface. The remote application provides ways for users to interact with the main application with options such as controlling the weather and changing time.',
  },
  {
    id: 2,
    img: socialImg,
    url: 'https://social-app-b8kg.onrender.com',
    github: 'https://github.com/rimuyamaura/social-app',
    title: 'Social-App',
    tech: 'React JS, Express.js, MongoDB, Socket.IO',
    description: 'Social media application with a realtime chat.',
    text: 'Social media website where users can post and follow their friends! along with a realtime chat feature across users. Users can View/Create/Edit/Delete posts, like and comment on posts, follow/unfollow users, and send messages and images to other users. The application is built with React, Express.js, MongoDB, and Socket.IO for the chat feature.',
  },
  {
    id: 3,
    img: joblogImg,
    url: 'https://job-log-fndaada8cth3f8bh.australiacentral-01.azurewebsites.net/',
    github: 'https://github.com/rimuyamaura/job-log',
    title: 'Job-Log',
    tech: 'React TS, MUI, .NET Core, Azure',
    description: 'Job Application tracker.',
    text: 'A job application tracking website designed to help users save and monitor their job application progress throughout their job search journey! Users are able to login to view, create, edit, and delete their job applications along with the ability to sort by status and view statistics for their own applications.',
  },
  {
    id: 4,
    img: comfyImg,
    url: 'https://ry-comfy-store.netlify.app',
    github: 'https://github.com/rimuyamaura/comfy-store',
    title: 'Comfy Store',
    tech: 'React JS, TailwindCSS',
    description: 'Furniture shopping website',
    text: 'A mock website with online shopping functionalities for furniture and beds. Connecting to the provided Comfy Store custom api server to fetch and store data. Browse, search, filter through products and register as a user to add products to cart and checkout.',
  },
  {
    id: 5,
    img: portfolioImg,
    url: 'https://rimuyamaura.netlify.app',
    github: 'https://github.com/rimuyamaura/rimuyamaura-portfolio',
    title: 'Portfolio Website',
    tech: 'React JS, DaisyUI',
    description: 'Personal portfolio website.',
    text: 'My personal portfolio website. Built with React and DaisyUI.',
  },
  {
    id: 6,
    img: musicImg,
    url: null,
    github: 'https://github.com/rimuyamaura/music-library',
    title: 'Music Library',
    tech: 'Flask, SQLalchemy',
    description: 'Music library.',
    text: "Flask app where you can view and organize tracks from a library of music. Allowing CRUD operations on the user's collection.",
  },
];

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
          height: '15vh',
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
            {project.description}
          </Typography>
        </Box>
        <Box
          className='imageBackground'
          sx={{
            width: '50%',
            height: '10vh',
            background: `url(${project.img}) no-repeat top center/cover`,
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
export { projects };
