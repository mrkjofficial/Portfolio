import { Loader } from "../";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

type Props = {
	icon: string;
};

const BallCanvas = ({ icon }: Props) => {
	type BallProps = {
		icon: string;
	};
	const Ball = ({ icon }: BallProps) => {
		const [decal] = useTexture([icon]);
		return (
			<Float floatIntensity={2} rotationIntensity={1} speed={1.75}>
				<ambientLight intensity={0.25} />
				<directionalLight position={[0, 0, 0.05]} />
				<mesh castShadow receiveShadow scale={2.75}>
					<icosahedronGeometry args={[1, 1]} />
					<meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} />
					<Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} />
				</mesh>
			</Float>
		);
	};
	return (
		<Canvas dpr={[1, 2]} frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<Loader />}>
				<OrbitControls enableZoom={false} />
				<Ball icon={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
