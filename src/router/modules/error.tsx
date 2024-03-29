import React from 'react';
import lazyLoad from '@/router/utils/lazyLoad';
import { RouteItem } from '@/router/interface';

// 错误页面模块
const errorRouter = [
	{
		path: '/403',
		element: lazyLoad(React.lazy(() => import('@/pages/error/403'))),
		meta: {
			requiresAuth: true,
			title: '403页面',
			key: '403'
		}
	},
	{
		path: '/404',
		element: lazyLoad(React.lazy(() => import('@/pages/error/404'))),
		meta: {
			requiresAuth: false,
			title: '404页面',
			key: '404'
		}
	},
	{
		path: '/500',
		element: lazyLoad(React.lazy(() => import('@/pages/error/500'))),
		meta: {
			requiresAuth: false,
			title: '500页面',
			key: '500'
		}
	}
] as Array<RouteItem>;

export default errorRouter;
