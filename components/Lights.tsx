import { softShadows } from "@react-three/drei";



export default function Lights(): JSX.Element {
  return (
    <>
      <directionalLight
        position={[0, 1, 1]}
        intensity={0.7}
        castShadow
        shadow-mapSize={[1024*2, 1024*2]}
        shadow-camera-top={3}
        shadow-camera-right={3}
        shadow-camera-bottom={-3}
        shadow-camera-left={-3}
      />
      <ambientLight intensity={0.3} />
    </>
  );
}
