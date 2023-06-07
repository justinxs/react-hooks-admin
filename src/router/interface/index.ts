import { type RouteObject } from 'react-router-dom';

export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export type RouteItem = RouteObject & {
	children?: RouteItem[];
	meta?: MetaProps;
};
