import { IRoute } from 'umi-types';

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export function patchRoutes(routes: IRoute[]) {
  routes[0].routes?.unshift(
    ...[
      {
        path: '/detail',
        component: require('./pages/detail').default,
      },
    ],
  );
}
