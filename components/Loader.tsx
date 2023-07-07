import { LoadingOutlined } from '@ant-design/icons';
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
	const { progress } = useProgress();
	return (
		<Html as="div" center style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
			<LoadingOutlined className="loader__icon" />
			<p style={{ color: "#fff", fontSize: 14, fontWeight: 800, marginTop: 10 }}>
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

export default Loader;
