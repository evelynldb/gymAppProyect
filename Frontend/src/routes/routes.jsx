import { createBrowserRouter } from 'react-router-dom'
import { ActivitiesFeed, ActivityDetailPage, ChangePassword, CheckCode, CrearActivity, Dashboard, Login, Main, Profile, Register, UpdateUser } from '../pages'
import App from '../App'
import { ForgotPassword } from '../pages/ForgotPassword'
import { Protected, ProtectedCheckChildren } from '../components'
import { NavUser } from '../components/NavUser'
import MessageComponent from '../pages/CreateMessage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
          <Protected>
            <CrearActivity />
          </Protected>
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
        path: '/home',
        element: <Main />,
      },
      {
        path: '/profile',
        element: <NavUser />,
      },
      {
        path: '/createMessage',
        element: <MessageComponent />,
      }
    ],
  },
]);