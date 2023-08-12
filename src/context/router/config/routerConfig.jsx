import { routes } from '../../../configs/routes';
import IndexLayout from '../../../layouts/IndexLayout';
import MainPage from '../../../pages/MainPage';

const routerConfig = [
  {
    path: routes.main.path,
    element: <IndexLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
];

export { routerConfig };
