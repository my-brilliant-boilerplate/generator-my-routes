import ScreenAuth  from './auth/components/layout';
import routes from './dashboard/routes';

const mainRoutes = {
  Auth: {
    screen: ScreenAuth,
  },
  ...routes,
};

const routeNames = Object.keys(mainRoutes)
  .reduce((names, key) => {
    names[key] = key;
    return names;
  }, {});

export { routeNames };

export default mainRoutes;
