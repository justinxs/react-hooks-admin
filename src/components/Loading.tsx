import { Spin } from 'antd';
import './style/loading.less';

const Loading = () => {
	return <Spin size="large" className="request-loading" />;
};

export default Loading;
