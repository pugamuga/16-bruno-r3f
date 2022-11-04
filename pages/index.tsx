import {
  AccumulativeShadows,
  ContactShadows,
  Html,
  OrbitControls,
  RandomizedLight,
  Sky,
  softShadows,
} from "@react-three/drei";
import { Canvas, RootState } from "@react-three/fiber";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import Lights from "../components/Lights";
import Knot from "../components/MeshElements/Knot";
import Sphere from "../components/MeshElements/Sphere";
import TextThreeD from "../components/MeshElements/TextThreeD";
import TestElement from "../components/TestElement";
import { testState } from "../recoilState/recoilState";
//@ts-ignore
import { Color } from "three";
import InsideCanvas from "../components/InsideCanvas";
import StageTesting from "../components/StageTesting";
import TextLesson from "../components/TextLesson";

// softShadows();

const Home: NextPage = (): JSX.Element => {
  const [text, setText] = useRecoilState(testState);

  

  console.log(ContactShadows);

  return (
    <div className=" bg-black/10 h-screen w-full">
      <div
        onClick={() => {
          setText((prev) => !prev);
        }}
        className=" absolute top-10 left-10 bg-black/20 text-white z-10 p-3 cursor-pointer select-none"
      >
        {text ? "false" : "true"}
      </div>
      <Canvas shadows={false}>
        {/* <AccumulativeShadows
        color="#316d39"
        opacity={.5}
        frames={60}
        position={[0, 0.01, 0]} scale={10}>
          <RandomizedLight
            castShadow
            position={[0, 3, 3]}
            amount={8}
            radius={1}
            ambient={0.5}
            intensity={1}
            bias={0.001}
          />
        </AccumulativeShadows> */}
        {/* <StageTesting/> */}
        <TextLesson/>
        {/* <InsideCanvas /> */}
      </Canvas>
      {/* <Canvas
      shadows={true}
      onCreated={created}
        gl={{
          toneMapping: 4,
        }}
        camera={{
          fov: 45,
          position: [3, 2, 5],
        }}
      >
        <color args={["ivory"]} attach="background"/>
        <Lights />
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.1}
          enableDamping={true}
          makeDefault
        />
        <TextThreeD />
        <Knot/>
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Knot/>

        <Sphere scale={"ten"} positionX={-2}/>
      </Canvas> */}
    </div>
  );
};

export default Home;
