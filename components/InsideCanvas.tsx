import { OrbitControls, softShadows } from "@react-three/drei";
import { Perf } from "r3f-perf";

softShadows();


export default function InsideCanvas(): JSX.Element {
    console.log(softShadows)
  return (
    <>
      <Perf position="bottom-left" />
      <color args={["ivory"]} attach="background" />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[0, 2, 2]} intensity={0.5} />
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping={true}
        makeDefault
      />
      {/* <axesHelper args={[10]}/> */}
      <mesh position-y={0.5} position-x={-2} castShadow>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
      <mesh position-y={0.75} position-x={2} scale={0.75} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
      <mesh scale={10} rotation-x={Math.PI * -0.5} receiveShadow>
        <planeGeometry />
        <meshStandardMaterial color={"greenyellow"} />
      </mesh>
    </>
  );
}
