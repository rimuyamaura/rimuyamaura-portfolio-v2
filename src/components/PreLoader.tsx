import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Box, Typography, useTheme } from '@mui/material';

interface PreLoaderProps {
  loading: boolean;
}

const PreLoader = ({ loading }: PreLoaderProps) => {
  const name = useRef<HTMLSpanElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    if (name.current) {
      const typed = new Typed(name.current, {
        strings: ['Rimu Yamaura'],
        startDelay: 100,
        typeSpeed: 50,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      {loading && (
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Typography
            component='span'
            variant='body2'
            fontSize={25}
            sx={{
              display: 'flex',
              alignItems: 'center',
              animation: 'fadeOut 1s ease-in-out forwards 2s',
              '@keyframes fadeOut': {
                from: { opacity: 1 },
                to: { opacity: 0 },
              },
              willChange: 'opacity',
            }}
          >
            <Typography
              ref={name}
              fontSize={{ xs: 15, lg: 22 }}
              fontWeight={300}
            ></Typography>
            <Typography
              component='span'
              fontSize={{ xs: 15, lg: 22 }}
              sx={{
                color: theme.palette.secondary.main,
                paddingLeft: 1,
              }}
            >
              portfolio
            </Typography>
          </Typography>
        </Box>
      )}
    </>
  );
};

export default PreLoader;
