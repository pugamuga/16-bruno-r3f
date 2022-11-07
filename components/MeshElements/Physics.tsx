import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Physics(): JSX.Element {
  return (
    <>
    <Perf/>
    <color args={["ivory"]} attach="background"/>
      <OrbitControls />
      <directionalLight position={[1,2,3]} castShadow intensity={1.5}/>
      <ambientLight intensity={.5}/>
      <mesh castShadow position={[2,2,0]} scale={1.5}>  
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh position={[-2,2,0]} castShadow>
         <sphereGeometry/>
         <meshStandardMaterial color={'orange'}/>
      </mesh>
      <mesh scale={[10,10,.4]} rotation-x={Math.PI*-1/2} receiveShadow >
         <boxGeometry/>
         <meshStandardMaterial color={'yellowgreen'}/>
      </mesh>
    </>
  );
}
