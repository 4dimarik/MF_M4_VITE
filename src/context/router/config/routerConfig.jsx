import { routes } from '../../../configs/routes';
import IndexLayout from '../../../layouts/IndexLayout';
import MainPage from '../../../pages/MainPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';

const routerConfig = [
  {
    path: routes.main.path,
    element: <IndexLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export { routerConfig };
