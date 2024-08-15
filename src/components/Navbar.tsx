import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const links = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/projects' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <Box>
      {links.map((link) => (
        <Box
          key={link.title}
          sx={{
            py: { xs: 0, lg: '5px' },
            width: 'auto',
            paddingLeft: { xs: 0, lg: 1 },
          }}
        >
          <RouterLink
            to={link.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography
              fontSize={{ xs: 13, lg: 15 }}
              fontWeight='bold'
              sx={{
                '&:hover': {
                  color: 'primary.light',
                  transition: 'color 0.3s ease-out',
                },
              }}
            >
              {link.title}
            </Typography>
          </RouterLink>
        </Box>
      ))}
    </Box>
  );
};
export default Navbar;
