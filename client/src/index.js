import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./pages/Error";
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile'
import ProjectPage from './pages/Project'
import SavedJobsPage from "./pages/SavedJobs"
import SeekersPage from "./pages/Seekers"
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
      {
        path: 'savedJobs',
        element: <SavedJobsPage/>,
      },
      {
        path: 'jobSeekers',
        element: <SeekersPage/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
