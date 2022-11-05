import { Html, OrbitControls, Stage } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef, useState } from "react";

export default function MouseEventsLesson(): JSX.Element {
  const [cubeColor, setCubeColor] = useState<"hotpink" | "gray">("hotpink");
  const [currentColorSphere, setcurrentColorSphere] = useState<string>("click");
  const [show, setShow] = useState<boolean>(false);
  const boxRef = useRef<any>();
  const sphereRef = useRef<any>();

  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += delta;
    }
  });
  return (
    <>
      <Perf />
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping={true}
        makeDefault
      />
      <color args={["ivory"]} attach="background" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
      <mesh
        position-x={-2}
        ref={boxRef}
        castShadow
        onClick={() => {
          if (cubeColor === "hotpink") {
            setCubeColor("gray");
          } else {
            setCubeColor("hotpink");
          }
        }}
      >
        <boxGeometry />
        <meshStandardMaterial color={cubeColor} />
        <Html center>
          <div className=" bg-black/50 superflex py-1 rounded-md opacity-0 tr-300 hover:opacity-100 select-none">
            <p className="w-48 text-center text-white/90 font-bold">
              Cube change color
            </p>
          </div>
        </Html>
      </mesh>
      <mesh
        position-x={2}
        scale={0.5}
        castShadow
        ref={sphereRef}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
          setShow(true);
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
          setShow(false);
        }}
        onClick={(e) => {
          console.log(e);
          //   e.stopPropagation()
          let curColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
            Math.random() * 255
          )}, ${Math.round(Math.random() * 255)})`;
          sphereRef.current.material.color.set(curColor);
          setcurrentColorSphere(curColor);
        }}
      >
        <sphereGeometry />
        <meshStandardMaterial color={"orange"} />
        {show && (
          <Html center>
            <div
              onPointerEnter={() => {
                document.body.style.cursor = "pointer";
                setShow(true);
              }}
              className=" bg-black/50 superflex py-1 rounded-md  tr-300  select-none"
            >
              <p className="w-48 text-center text-white font-bold">
                {currentColorSphere}
              </p>
            </div>
          </Html>
        )}
      </mesh>
      <mesh
        scale={10}
        rotation-x={(Math.PI * -1) / 2}
        position-y={-0.5}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
}
