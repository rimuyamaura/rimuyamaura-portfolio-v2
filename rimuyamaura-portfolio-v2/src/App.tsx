import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useAppSelector } from './store';
import { getDesignTokens } from './theme/theme';
import {
  PageLayout,
  HomePage,
  ProjectsPage,
  AboutPage,
  ContactPage,
} from './pages';

function App() {
  const { isDarkMode } = useAppSelector((state) => state.userState);
  const colorMode = isDarkMode ? 'dark' : 'light';

  const theme = useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode]
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;