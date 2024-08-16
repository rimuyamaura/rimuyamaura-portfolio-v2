import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const links = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/projects' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box>
      {links.map((link) => (
        <Box
          key={link.title}
          sx={{
            py: { xs: '1px', lg: '0.5vh' },
            width: 'auto',
            paddingLeft: { xs: 0, lg: 1 },
            position: 'relative',
          }}
        >
          <RouterLink
            to={link.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography
              fontWeight='bold'
              sx={{
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  color: 'primary.light',
                  transition: 'color 0.3s ease-out',
                },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                component='span'
                style={{
                  opacity: link.path === currentPath ? 0 : 1,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                {link.title}
              </Typography>
              <CircleIcon
                sx={{
                  fontSize: '0.5rem',
                  opacity: link.path === currentPath ? 1 : 0,
                  animation:
                    link.path === currentPath
                      ? 'fadeIn 1s ease-in-out'
                      : 'fadeOut 0.3s ease-in-out',
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                  },
                  '@keyframes fadeOut': {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                  },
                  position: 'absolute',
                  left: 0,
                }}
              />
            </Typography>
          </RouterLink>
        </Box>
      ))}
    </Box>
  );
};
export default Navbar;
