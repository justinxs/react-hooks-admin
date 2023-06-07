import { Navigate } from 'react-router-dom';
import type { RouteItem } from './interface/index';
import routes from './routes';
import Login from '@/pages/login/index';

const rootRouter: RouteItem[] = [
	{
		path: '/',
		element: <Navigate to="/login" />
	},
	{
		path: '/login',
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: '登录页',
			key: 'login'
		}
	},
	...routes,
	{
		path: '*',
		element: <Navigate to="/404" />
	}
];

export default rootRouter;
