import type { RouteConfig } from '../../common/@types';
import { NotFoundPage, TopVpnPage, VpnReviewPage } from '../../pages';
import { PATH_ERROR, PATH_VPN_APP } from '../paths';

export const publicRoutes: RouteConfig[] = [
  {
    path: PATH_VPN_APP.root,
    component: <TopVpnPage />,
  },
  {
    path: PATH_VPN_APP.review.detailBySlug,
    component: <VpnReviewPage />,
  },
  {
    path: PATH_ERROR.notFound,
    component: <NotFoundPage />,
  },
];
