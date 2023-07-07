import { Loader } from "../";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload } from "@react-three/drei";

const DesktopCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	const Desktop = () => {
		const desktop = useGLTF("./desktop/scene.gltf");
		return (
			<mesh>
				<hemisphereLight groundColor="black" intensity={0.15} />
				<spotLight angle={0.12} castShadow intensity={1} penumbra={1} position={[-20, 50, 10]} shadow-mapSize={1024} />
				<pointLight intensity={1} />
				<primitive object={desktop.scene} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} scale={0.75} />
			</mesh>
		);
	};
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 640px)");
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);
	return (
		<Canvas camera={isMobile ? { fov: 50, position: [20, 3, 5] } : { fov: 30, position: [20, 3, 5] }} dpr={[1, 2]} frameloop="demand" gl={{ preserveDrawingBuffer: true }} shadows>
			<Suspense fallback={<Loader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Desktop />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default DesktopCanvas;
