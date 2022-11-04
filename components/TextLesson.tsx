import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef, useState } from "react";
import Donut from "./MeshElements/Donut";

export default function TextLesson(): JSX.Element {
  const [torusGeometry, setTorusGeometry] = useState<any>();
  const [material, setMaterial] = useState<any>();

  const [matCap] = useMatcapTexture("686B73_2A2B2D_D5D9DD_B0B3BC", 128);

  const refDonutGroup = useRef<any>();

  useFrame((state, delta) => {
    if (refDonutGroup.current) {
      for(const eachDonut of refDonutGroup.current.children){
        eachDonut.rotation.y +=delta* .5
      }
    }
  });

  return (
    <>
      <Perf />
      <torusGeometry args={[1, 0.6, 16, 100]} ref={setTorusGeometry} />
      <meshMatcapMaterial matcap={matCap} ref={setMaterial} />
      <color args={["ivory"]} attach="background" />
      <OrbitControls />
      {/* <mesh scale={1.5}>
         <boxGeometry/>
         <meshNormalMaterial/>
      </mesh> */}
      <Center>
        <Text3D
          material={material}
          font={"./fonts/Poor_Story_Regular.json"}
          size={0.75}
          height={0.1}
          curveSegments={12}
          bevelEnabled={true}
          bevelThickness={0.02}
          bevelSize={0.03}
          bevelOffset={0}
          bevelSegments={15}
        >
          Three JS!
        </Text3D>
      </Center>
      <group ref={refDonutGroup}>
        {[...Array(100)].map((item, index) => {
          return (
            <Donut
              material={material}
              geometry={torusGeometry}
              key={index}
              scale={0.2 + Math.random() * 0.2}
              rotation={[Math.PI * Math.random(), Math.PI * Math.random(), 0]}
              position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
              ]}
            />
          );
        })}
      </group>
    </>
  );
}
