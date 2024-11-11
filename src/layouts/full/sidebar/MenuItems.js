import { faUser, faTruck, faUsers, faTachometerAlt, faSignInAlt,faUserPlus } from '@fortawesome/free-solid-svg-icons';


import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: faTachometerAlt,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Customers',
    icon: faUser,
    href: '/customers',
  },
  {
    id: uniqueId(),
    title: 'Supplier',
    icon: faTruck,
    href: '/supplier',
  },
  {
    id: uniqueId(),
    title: 'Collaborator',
    icon: faUsers,
    href: 'collaborator',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: faSignInAlt,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: faUserPlus,
    href: '/auth/register',
  },
];

export default Menuitems;
