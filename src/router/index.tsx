import { useRoutes } from 'react-router-dom';
import rootRouter from './rootRouter';

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

// 为了使 React 刷新(hmr update)正常工作，您的文件应该只导出 React 组件
// Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
export default Router;
