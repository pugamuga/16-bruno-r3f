import { Html, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import Lights from "../components/Lights";
import Knot from "../components/MeshElements/Knot";
import Sphere from "../components/MeshElements/Sphere";
import TextThreeD from "../components/MeshElements/TextThreeD";
import TestElement from "../components/TestElement";
import { testState } from "../recoilState/recoilState";

const Home: NextPage = (): JSX.Element => {
  const [text, setText] = useRecoilState(testState);

  return (
    <div className=" bg-black/10 h-screen w-full">
      <div
        onClick={() => {
          setText((prev) => !prev);
        }}
        className=" absolute top-10 left-10 bg-black/20 text-white z-10 p-3 cursor-pointer select-none"
      >
        {text?"false":"true"}
      </div>
      <Canvas
        // dpr={[1,2]}
        gl={{
          toneMapping: 4,
        }}
        camera={{
          fov: 45,
          position: [3, 2, 5],
        }}
      >
        <Lights />
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.1}
          enableDamping={true}
          makeDefault
        />
        <TextThreeD/>
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        {/* <Knot/> */}

        <Sphere />
      </Canvas>
    </div>
  );
};

export default Home;
