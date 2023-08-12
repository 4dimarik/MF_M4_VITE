import { useRoutes } from 'react-router-dom';
import { routerConfig } from '../config/routerConfig';
import { useCallback } from 'react';

export function AppRouter() {
  const routeWrapper = useCallback((route) => {
    const element = <>{route.element}</>;

    return {
      path: route.path,
      element: route.private ? <>{element}</> : element,
      ...(route.index ? { index: route.index } : {}),
      ...(route.children
        ? {
            children: route.children.map((childrenRoute) =>
              routeWrapper(childrenRoute)
            ),
          }
        : {}),
    };
  }, []);

  const routes = routerConfig.map((route) => routeWrapper(route));
  return useRoutes(routes);
}
