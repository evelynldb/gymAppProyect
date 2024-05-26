import { createBrowserRouter } from 'react-router-dom';
import {
  ActivitiesFeed,
  ActivityDetailPage,
  ActivityListSuperAdmin,
  ChangePassword,
  CheckCode,
  Contact,
  CrearActivity,
  Dashboard,
  Home,
  Login,
  Profile,
  Register,
  SuperAdminPanel,
  UpdateActivity,
  UpdateUser,
} from '../pages';
import App from '../App';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Protected, ProtectedCheckChildren, ProtectedSuperAdmin } from '../components';
import { NavUser } from '../components/NavUser';
import MessageComponent from '../pages/CreateMessage';
import { Wall } from '../pages/Wall';
import { CreateWallForm } from '../pages/CreateWallForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Ruta de índice
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/verifyCode',
        element: (
          <ProtectedCheckChildren>
            <CheckCode />
          </ProtectedCheckChildren>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword />,
      },
      {
        path: '/profile/',
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
      },
      {
        path: '/update/update',
        element: (
          <Protected>
            <UpdateUser />
          </Protected>
        ),
      },
      {
        path: '/changePassword',
        element: (
          <Protected>
            <ChangePassword />
          </Protected>
        ),
      },
      {
        path: '/activities/create',
        element: (
          <ProtectedSuperAdmin>
            <CrearActivity />
          </ProtectedSuperAdmin>
        ),
      },
      {
        path: '/activities/update/:id',
        element: (
          <ProtectedSuperAdmin>
            <UpdateActivity />
          </ProtectedSuperAdmin>
        ),
      },
      {
        path: '/activities/feed',
        element: <ActivitiesFeed />,
      },
      {
        path: '/activities/:idActivity',
        element: <ActivityDetailPage />,
      },
      {
        path: '/profile',
        element: <NavUser />,
      },
      {
        path: '/createMessage',
        element: <MessageComponent />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/wall',
        element: <Wall />,
      },
      {
        path: '/createWallForm',
        element: <CreateWallForm />,
      },
      {
        path: '/activitiesList',
        element: (
          <ProtectedSuperAdmin>
            <ActivityListSuperAdmin />
          </ProtectedSuperAdmin>
        ),
      },
      {
        path: '/superadmin',
        element: (
          <ProtectedSuperAdmin>
            <SuperAdminPanel />
          </ProtectedSuperAdmin>
        ),
      },
    ],
  },
]);
