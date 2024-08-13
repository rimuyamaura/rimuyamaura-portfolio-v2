import { Box, Link, Typography, useMediaQuery, Theme } from '@mui/material';

const EmailTag = () => {
  const isXsScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: { xs: 'calc(100vh - 30.5px)', lg: 'calc(100vh - 37.5px)' },
          right: { xs: '25px', lg: '37.5px' },
          display: 'flex',
          height: '30px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href='mailto:rimuyamaura@gmail.com' underline='hover'>
          <Typography fontSize={{ lg: 'small' }} variant='overline'>
            {isXsScreen ? (
              <>RIMUYAMAURA@GMAIL.COM</>
            ) : (
              <>
                CONTACT
                <span style={{ margin: '0 8px' }}>//</span>
                RIMUYAMAURA@GMAIL.COM
              </>
            )}
          </Typography>
        </Link>
      </Box>
    </>
  );
};
export default EmailTag;
