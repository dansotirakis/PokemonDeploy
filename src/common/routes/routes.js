import { Login } from '../../app/pages/Login';
import { List } from '../../app/pages/pokemon/List';
import { Form } from '../../app/pages/pokemon/Form';
import { Read } from '../../app/pages/pokemon/Read';

export const ROUTES = [
  {
    component: Login,
    path: '/',
    exact: true,
  },
  {
    component: List,
    path: '/list',
  },
  {
    component: Read,
    path: '/read',
  },
  {
    component: Form,
    path: '/form',
  },
];
