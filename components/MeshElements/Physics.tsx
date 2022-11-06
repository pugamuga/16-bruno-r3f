import { OrbitControls } from "@react-three/drei";

export default function Physics(): JSX.Element {
  return (
    <>
    <color args={["ivory"]} attach="background"/>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
