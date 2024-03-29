import React from 'react';
import lazyLoad from '@/router/utils/lazyLoad';
import { LayoutIndex } from '@/router/constant';
import { RouteItem } from '@/router/interface';

// dashboard 模块
const dashboardRouter = [
	{
		element: <LayoutIndex />,
		meta: {
			title: 'Dashboard'
		},
		children: [
			{
				path: '/dashboard/dataVisualize',
				element: lazyLoad(React.lazy(() => import('@/pages/dashboard/dataVisualize'))),
				meta: {
					requiresAuth: true,
					title: '数据可视化',
					key: 'dataVisualize'
				}
			},
			{
				path: '/dashboard/embedded',
				element: lazyLoad(React.lazy(() => import('@/pages/dashboard/embedded'))),
				meta: {
					requiresAuth: true,
					title: '内嵌页面',
					key: 'embedded'
				}
			}
		]
	}
] as RouteItem[];

export default dashboardRouter;
