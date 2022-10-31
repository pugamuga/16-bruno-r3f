import { Html, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Lights from "../components/Lights";
import Knot from "../components/MeshElements/Knot";
import Sphere from "../components/MeshElements/Sphere";
import TestElement from "../components/TestElement";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className=" bg-black/10 h-screen w-full">
      <Canvas
      // dpr={[1,2]}
      gl={{
        toneMapping:4
      }}
      camera={{
        fov:45,
        position:[3,2,5],
      }}
      >
        <Lights/>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} enableDamping={true} makeDefault/>
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
