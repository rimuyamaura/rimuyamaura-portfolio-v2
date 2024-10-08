import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../store';

interface PreLoaderProps {
  loading: boolean;
}

const PreLoader = ({ loading }: PreLoaderProps) => {
  const { isDarkMode } = useAppSelector((state) => state.userState);
  const name = useRef<HTMLSpanElement | null>(null);

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
            backgroundColor: 'background.default',
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
                color: isDarkMode ? 'secondary.main' : 'secondary.700',
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
