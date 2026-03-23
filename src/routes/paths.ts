import { path } from 'utils/path';

const ROOTS_VPN_APP = '/';
const ROOTS_ERROR = '/error';
const ROOTS_REVIEW = '/review';

export const VPN_SECTION_ID = {
  rankings: 'rankings',
  methodology: 'methodology',
  faq: 'faq',
} as const;

export const PATH_ERROR = {
  notFound: path(ROOTS_ERROR, '/404'),
};

export const PATH_VPN_APP = {
  root: ROOTS_VPN_APP,
  review: {
    root: ROOTS_REVIEW,
    detailBySlug: path(ROOTS_REVIEW, '/:slug'),
  },
};
