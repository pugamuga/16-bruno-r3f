import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  Debug,
  Physics as PhysicsRapier,
  RigidBody,
  CuboidCollider,
} from "@react-three/rapier";
import { useRef } from "react";
import Katana from "./Katana";

export default function Physics(): JSX.Element {
  const cubeRef = useRef<any>();
  const powerRandom = 1;

  return (
    <>
      <Perf />
      <color args={["ivory"]} attach="background" />
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} castShadow intensity={1.5} />
      <ambientLight intensity={0.5} />
      <PhysicsRapier gravity={[0, -9.8, 0]}>
        <RigidBody>
          <Katana position-y={4} />
        </RigidBody>

        <Debug />
        <RigidBody ref={cubeRef} friction={0.7} colliders={false}>
          <CuboidCollider
            args={[0.5, 0.5, 0.5]}
            mass={1}
            position={[2, 2, 0]}
          />
          <mesh
            onClick={() => {
              console.log(cubeRef.current.mass());
              cubeRef.current.applyImpulse({
                x: 0,
                y: 5 * cubeRef.current.mass(),
                z: 0,
              });
              cubeRef.current.applyTorqueImpulse({
                x: (Math.random() - 0.5) * powerRandom,
                y: (Math.random() - 0.5) * powerRandom,
                z: (Math.random() - 0.5) * powerRandom,
              });
            }}
            castShadow
            scale={1}
            position={[2, 2, 0]}
          >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </RigidBody>
        <RigidBody colliders="ball" gravityScale={2} restitution={0.9}>
          <mesh position={[-2, 2, 0]} castShadow>
            <sphereGeometry />
            <meshStandardMaterial color={"orange"} />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" restitution={0.0} friction={0.7}>
          <mesh
            position-y={-1.25}
            scale={[10, 10, 0.5]}
            rotation-x={(Math.PI * -1) / 2}
            receiveShadow
          >
            <boxGeometry />
            <meshStandardMaterial color={"yellowgreen"} />
          </mesh>
        </RigidBody>
      </PhysicsRapier>
    </>
  );
}
