import { Html, MeshReflectorMaterial, PivotControls, TransformControls } from "@react-three/drei";
import {
  GroupProps,
  MeshProps,
  RootState,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { RecoilRoot } from "recoil";
import TestElement from "../TestElement";
import CustomGeometry from "./CustomGeometry";

export default function Sphere(): JSX.Element {
  const [sphereColor, setSphereColor] = useState("mediumpurple");

  const boxRef = useRef<MeshProps>(null);
  const sphereRef = useRef<MeshProps>(null);

  const groupRef = useRef<GroupProps | null>(null);

  const stateData: RootState = useThree();

  useFrame((state, delta) => {
    // if (boxRef.current) {
    //   boxRef.current.rotation.y += (1 / 2) * delta;
    // }
    // if (groupRef.current !== null) {
    //   groupRef.current.rotation.y += 2 * delta;
    // }
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) *8
    // state.camera.position.z = Math.cos(angle) *8
    // state.camera.lookAt(0,0,0)
  });

  return (
    <>
      <group ref={groupRef}>
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={1}
          axisColors={["black", "black", "black"]}
          scale={2}
        >
          <mesh
            ref={sphereRef}
            onClick={() => {
              if (sphereColor === "mediumpurple") {
                setSphereColor("gray");
              }
              if (sphereColor === "gray") {
                setSphereColor("mediumpurple");
              }
            }}
            position-x={-2}
            scale={0.75}
          >
            <sphereGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color={sphereColor} />
          </mesh>
        </PivotControls>
        <mesh ref={boxRef} position-x={2} scale={1.5} rotation-y={0}>
          <boxGeometry />
          <meshStandardMaterial color={"hotpink"} />
          <Html
            position={[0, 0, 0]}
            distanceFactor={8}
            center
            occlude={[sphereRef]}
          >
            <RecoilRoot>
              <TestElement />
            </RecoilRoot>
          </Html>
        </mesh>
        {/* @ts-ignore */}
        <TransformControls object={boxRef} mode="translate" />
      </group>
      {/* <CustomGeometry /> */}
      <mesh scale={10} rotation-x={(Math.PI * -1) / 2} position-y={-0.75}>
        <planeGeometry />
        <MeshReflectorMaterial 
        color={"greenyellow"} 
        resolution={256}
        blur={[1000,1000]}
        mixBlur={1}
        mirror={.5}
        />
      </mesh>
    </>
  );
}
