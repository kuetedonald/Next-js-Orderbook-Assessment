import { dashboard, logout, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard.src,
    link: '/',
  },
  {
    name: 'swap',
    imgUrl: withdraw.src,
    link: '/swap',
  },
  {
    name: 'logout',
    imgUrl: logout.src,
    link: '/',
    disabled: true,
  },
];
