import {
  AccumulativeShadows,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  softShadows,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import * as THREE from "three";

export default function InsideCanvas(): JSX.Element {
  const lightRef = useRef(null);
  const ringRef = useRef(null);
  const boxRef = useRef(null);

  console.log(ringRef.current);

  useFrame((state, delta) => {
    if (ringRef.current) {
         {/* @ts-ignore */}
         ringRef.current.rotation.y += delta;
        }
        if (boxRef.current) {
        {/* @ts-ignore */}
        boxRef.current.rotation.y += delta;
    }
  });

  useHelper(lightRef, THREE.DirectionalLightHelper, 1, "yellow");
  return (
    <>
      <Perf position="bottom-left" />
      <color args={["ivory"]} attach="background" />
      <Environment 
      background={true}
       preset="sunset"
       ground={{
        height:7,
        radius:28,
        scale:100
       }}
       >
        <color args={["black"]} attach="background" />
        <group ref={ringRef}>
          <Lightformer
            position={[0, 0, -5]}
            scale={4}
            color={"red"}
            intensity={10}
            form={"ring"}
          />
        </group>
      </Environment>

      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping={true}
        makeDefault
      />
      {/* <axesHelper args={[10]}/> */}
      <mesh position-y={1.5} position-x={-2} castShadow ref={boxRef}>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} roughness={1} metalness={0.1} />
      </mesh>
      <mesh position-y={0.75} position-x={2} scale={0.75} castShadow>
        <sphereGeometry />
        <meshStandardMaterial
          color={"mediumpurple"}
          roughness={0.6}
          //   metalness={1}
        />
      </mesh>
{/* 
      <mesh scale={10} rotation-x={Math.PI * -0.5}>
        <planeGeometry />
        <meshStandardMaterial color={"greenyellow"} />
      </mesh> */}
    </>
  );
}
