import { routes } from '../../../configs/routes';
import IndexLayout from '../../../layouts/IndexLayout';
import CategoryPage from '../../../pages/CategoryPage';
import MainPage from '../../../pages/MainPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { SignInPage } from '../../../pages/SignInPage';

const routerConfig = [
  {
    path: routes.main.path,
    element: <IndexLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: ':category',
        element: <CategoryPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export { routerConfig };
