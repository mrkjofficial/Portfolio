import { Suspense } from "react";
import { Loader } from "@components";
import { Canvas } from "@react-three/fiber"
import { Preload, Stars } from "@react-three/drei";

const StarsCanvas = () => {
	return (
		<Canvas camera={{ position: [0, 0, 1] }}>
			<Suspense fallback={<Loader />}>
				<Stars count={5000} depth={50} factor={4} fade radius={100} saturation={0} speed={1} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default StarsCanvas;