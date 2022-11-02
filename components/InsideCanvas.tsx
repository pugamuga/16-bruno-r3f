import { AccumulativeShadows, OrbitControls, softShadows, useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import * as THREE from "three"


export default function InsideCanvas(): JSX.Element {
    const lightRef = useRef(null)

    useHelper(lightRef, THREE.DirectionalLightHelper, 1, "yellow")
  return (
    <>
  
      <Perf position="bottom-left" />
      <color args={["ivory"]} attach="background" />
      <ambientLight intensity={0.5} />
       {/* @ts-ignore */}
      <directionalLight ref={lightRef} castShadow position={[0, 3, 3]} intensity={0.5} shadowMap={[1024,1024]}/>
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping={true}
        makeDefault
      />
      {/* <axesHelper args={[10]}/> */}
      <mesh position-y={1.5} position-x={-2} castShadow>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
      <mesh position-y={0.75} position-x={2} scale={0.75} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
      <mesh scale={10} rotation-x={Math.PI * -0.5} >
        <planeGeometry />
        <meshStandardMaterial color={"greenyellow"} />
      </mesh>
    </>
  );
}
