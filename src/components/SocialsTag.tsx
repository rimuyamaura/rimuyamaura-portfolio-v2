import React from 'react';
import { Box, Link, Typography, useTheme } from '@mui/material';

export const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rimu-yamaura-2a080b254/',
    icon: null,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rimuyamaura',
    icon: null,
  },
  {
    name: 'X(Twitter)',
    url: 'https://twitter.com/rimuyamaura',
    icon: null,
  },
];

const SocialsTag = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: '25px', lg: '37.5px' },
          left: { xs: '30px', lg: '40px' },
          height: '30px',
          width: 'auto',
          display: 'flex',
          flexDirection: 'row',
          transform: 'rotate(-90deg)',
          transformOrigin: 'left bottom',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          textRendering: 'optimizeLegibility',
        }}
      >
        <Typography
          fontSize={{ lg: 'small' }}
          color={palette.primary.main}
          variant='overline'
        >
          SOCIALS
        </Typography>
        {socials.map((social, i) => (
          <React.Fragment key={i}>
            <Typography
              fontSize={{ lg: 'small' }}
              color={palette.primary.main}
              variant='overline'
            >
              <span style={{ margin: '0 8px' }}>//</span>
            </Typography>
            <Link
              key={i}
              href={social.url}
              underline='hover'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography fontSize={{ lg: 'small' }} variant='overline'>
                {social.name}
              </Typography>
            </Link>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};
export default SocialsTag;
