import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Article from './pages/Article';
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';
import Project from './pages/Project';
import RelevantSkills from './pages/RelevantSkills';
import Error from './pages/Error';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: '/article',
      element: <Article />,
    },
    {
      path: '/contact-me',
      element: <ContactMe />,
    },
    {
      path: '/experience',
      element: <Experience />,
    },
    {
      path: '/project',
      element: <Project />,
    },
    {
      path: '/Relevant-Skills',
      element: <RelevantSkills />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
