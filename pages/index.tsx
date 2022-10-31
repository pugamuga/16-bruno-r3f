import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Knot from "../components/MeshElements/Knot";
import Sphere from "../components/MeshElements/Sphere";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className=" bg-black/10 h-screen w-full">
      <Canvas>
        <OrbitControls minAzimuthAngle={0}/>
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
