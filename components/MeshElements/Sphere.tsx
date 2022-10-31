import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere(): JSX.Element {
  const boxRef = useRef<null | MeshProps>(null);
  const groupRef = useRef<null | GroupProps>(null);

  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += (1 / 2) * delta;
    }
    if (groupRef.current) {
        groupRef.current.rotation.y += 2 * delta;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <mesh position-x={-2} scale={0.75}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshBasicMaterial color={"mediumpurple"} />
        </mesh>
        <mesh
          ref={boxRef}
          position-x={2}
          scale={1.5}
          rotation-y={(Math.PI * -1) / 5}
        >
          <boxGeometry />
          <meshBasicMaterial color={"hotpink"} />
        </mesh>
      </group>
      <mesh scale={6} rotation-x={(Math.PI * -1) / 2} position-y={-0.75}>
        <planeGeometry />
        <meshBasicMaterial color={"greenyellow"} />
      </mesh>
    </>
  );
}
