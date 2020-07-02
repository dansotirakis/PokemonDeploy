import { List } from '../../app/pages/pokemon/List';
import { Form } from '../../app/pages/pokemon/Form';
import { Read } from '../../app/pages/pokemon/Read';
export const ROUTES = [
  {
    component: List,
    path: '/',
    exact: true,
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
