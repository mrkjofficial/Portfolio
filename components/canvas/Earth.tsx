import { Loader } from "../";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const EarthCanvas = () => {
	const Earth = () => {
		const earth = useGLTF("./planet/scene.gltf");
		return (
			<primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
		);
	};
	return (
		<Canvas camera={{ fov: 60, far: 200, near: 0.1, position: [-4, 3, 6] }} dpr={[1, 2]} frameloop="demand" gl={{ preserveDrawingBuffer: true }} shadows>
			<Suspense fallback={<Loader />}>
				<OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Earth />
				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default EarthCanvas;
