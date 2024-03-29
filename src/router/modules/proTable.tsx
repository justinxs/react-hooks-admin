import React from 'react';
import lazyLoad from '@/router/utils/lazyLoad';
import { LayoutIndex } from '@/router/constant';
import { RouteItem } from '@/router/interface';

// 超级表格模块
const proTableRouter = [
	{
		element: <LayoutIndex />,
		meta: {
			title: '超级表格'
		},
		children: [
			{
				path: '/proTable/useHooks',
				element: lazyLoad(React.lazy(() => import('@/pages/proTable/useHooks'))),
				meta: {
					requiresAuth: true,
					title: '使用 Hooks',
					key: 'useHooks'
				}
			},
			{
				path: '/proTable/useComponent',
				element: lazyLoad(React.lazy(() => import('@/pages/proTable/useComponent'))),
				meta: {
					requiresAuth: true,
					title: '使用 Component',
					key: 'useComponent'
				}
			}
		]
	}
] as RouteItem[];

export default proTableRouter;
