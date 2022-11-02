import { OrbitControls, Stage } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function StageTesting(): JSX.Element {
  return (
    <>
      <color args={["ivory"]} attach="background" />
      <Stage
      contactShadow={{opacity:.2,blur:3}}
      environment="sunset"
      preset="portrait"
      intensity={1}
      >
        <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping={true}
        makeDefault
      />
        <Perf />
        <mesh position-y={0.7} position-x={-2} castShadow>
          <boxGeometry />
          <meshStandardMaterial
            color={"hotpink"}
            roughness={1}
            metalness={0.1}
          />
        </mesh>
        <mesh position-y={0.75} position-x={2} scale={0.75} castShadow>
          <sphereGeometry />
          <meshStandardMaterial
            color={"mediumpurple"}
            roughness={0.1}
            //   metalness={1}
          />
        </mesh>
      </Stage>
    </>
  );
}
