import React from 'react';
import lazyLoad from '@/router/utils/lazyLoad';
import { RouteItem } from '@/router/interface';

// 数据大屏模块
const dataScreenRouter = [
	{
		path: '/dataScreen/index',
		element: lazyLoad(React.lazy(() => import('@/pages/dataScreen/index'))),
		meta: {
			requiresAuth: true,
			title: '数据大屏',
			key: 'dataScreen'
		}
	}
] as RouteItem[];

export default dataScreenRouter;
