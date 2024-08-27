import { useEffect, useMemo, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  GlobalStyles,
} from '@mui/material';
import { useAppSelector } from './store';
import { getDesignTokens } from './theme/theme';
import {
  PageLayout,
  HomePage,
  ProjectsPage,
  AboutPage,
  ContactPage,
  ErrorPage,
} from './pages';
import { PreLoader } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  const { isDarkMode } = useAppSelector((state) => state.userState);
  const colorMode = isDarkMode ? 'dark' : 'light';
  const [loading, setLoading] = useState<boolean>(true);

  const theme = useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode]
  );

  useEffect(() => {
    console.log('App mounted or updated, loading:', loading);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            '::-webkit-scrollbar': {
              width: '8px',
              transition: 'background 1s ease-out',
            },
            '::-webkit-scrollbar-track': {
              opacity: 0, // Use opacity to hide scrollbar track, color transition didn't work for track
            },
            '::-webkit-scrollbar-thumb': {
              background: theme.palette.primary.main,
              borderRadius: '10px',
            },
            '::-webkit-scrollbar-thumb:hover': {
              background: theme.palette.primary.light,
            },
          }}
        />
        <CssBaseline />
        <PreLoader loading={loading} />
        {!loading && <RouterProvider router={router} />}
      </ThemeProvider>
    </>
  );
}

export default App;
