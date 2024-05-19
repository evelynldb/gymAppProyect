import { createBrowserRouter } from 'react-router-dom'
import { ActivityDetailPage, ChangePassword, CheckCode, Dashboard, Login, Register, UpdateUser } from '../pages'
import App from '../App'
import { ForgotPassword } from '../pages/ForgotPassword'
import { Protected, ProtectedCheckChildren } from '../components'
import { CrearActivity } from '../pages/CrearActivity'
import { ActivitiesFeed } from '../pages/ActivitiesFeed'

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
    ],
  },
]);