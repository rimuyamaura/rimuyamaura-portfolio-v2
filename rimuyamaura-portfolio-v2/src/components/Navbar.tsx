import { Box, Typography, Link } from '@mui/material';

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
          <Link href={link.path} color='inherit' underline='none'>
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
          </Link>
        </Box>
      ))}
    </Box>
  );
};
export default Navbar;
