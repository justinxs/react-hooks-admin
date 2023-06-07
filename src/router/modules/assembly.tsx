import React from 'react';
import lazyLoad from '@/router/utils/lazyLoad';
import { LayoutIndex } from '@/router/constant';
import { RouteItem } from '@/router/interface';

// 常用组件模块
const assemblyRouter = [
	{
		element: <LayoutIndex />,
		meta: {
			title: '常用组件'
		},
		children: [
			{
				path: '/assembly/guide',
				element: lazyLoad(React.lazy(() => import('@/pages/assembly/guide'))),
				meta: {
					requiresAuth: true,
					title: '引导页',
					key: 'guide'
				}
			},
			{
				path: '/assembly/svgIcon',
				element: lazyLoad(React.lazy(() => import('@/pages/assembly/svgIcon'))),
				meta: {
					requiresAuth: true,
					title: 'SVG 图标',
					key: 'svgIcon'
				}
			},
			{
				path: '/assembly/selectIcon',
				element: lazyLoad(React.lazy(() => import('@/pages/assembly/selectIcon'))),
				meta: {
					requiresAuth: true,
					title: 'Icon 选择',
					key: 'selectIcon'
				}
			},
			{
				path: '/assembly/batchImport',
				element: lazyLoad(React.lazy(() => import('@/pages/assembly/batchImport'))),
				meta: {
					requiresAuth: true,
					title: '批量导入数据',
					key: 'selectIcon'
				}
			}
		]
	}
] as Array<RouteItem>;

export default assemblyRouter;
