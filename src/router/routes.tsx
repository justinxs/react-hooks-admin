import type { RouteItem } from './interface/index';

// * 导入所有router
const metarouter: Record<string, any> = import.meta.glob(['./modules/home.tsx', './modules/error.tsx'], { import: 'default', eager: true });

// * 处理路由
const routes: RouteItem[] = [];

Object.keys(metarouter).forEach(routePath => {
	routes.push(...metarouter[routePath]);
});

export default routes;
