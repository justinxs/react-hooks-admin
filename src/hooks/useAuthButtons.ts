import { searchRoute } from '@/utils/util';
import { useLocation } from 'react-router-dom';
import routes from '@/router/routes';
import { store } from '@/redux/store';

/**
 * @description 页面按钮权限 hooks
 * */
const useAuthButtons = () => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routes);

	return {
		BUTTONS: store.getState().auth.authButtons[route.meta!.key!] || {}
	};
};

export default useAuthButtons;
