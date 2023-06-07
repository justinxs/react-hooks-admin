import { LayoutIndex } from '@/router/constant';
import { RouteItem } from '@/router/interface';
import Home from '@/pages/home/index';

// 首页模块
const homeRouter = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/home/index',
				element: <Home />,
				meta: {
					requiresAuth: true,
					title: '首页',
					key: 'home'
				}
			}
		]
	}
] as RouteItem[];

export default homeRouter;
