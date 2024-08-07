import { useMemo, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, Switch } from '@mui/material';
import { lightThemeSettings, darkThemeSettings } from './theme/theme';
import { PageLayout, HomePage, ContactPage } from './pages';

function App() {
  const lightTheme = useMemo(() => createTheme(lightThemeSettings), []);
  const darkTheme = useMemo(() => createTheme(darkThemeSettings), []);

  const [isDarkMode, setIsDarkMode] = useState(false);

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
          path: '/contact',
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
      {/* <Switch
        checked={isDarkMode}
        onChange={() => setIsDarkMode((prev) => !prev)}
      /> */}
    </ThemeProvider>
  );
}

export default App;
