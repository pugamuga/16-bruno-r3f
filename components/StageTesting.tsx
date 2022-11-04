import { Html, OrbitControls, Stage, useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useEffect } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import BigModels from "./BigModels";

export default function StageTesting(): JSX.Element {
  const highPoly = useLoader(GLTFLoader, "./models/highPoly.gltf", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });
  const cart = useLoader(GLTFLoader, "./models/cart.gltf", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });
  const cartLowRes = useLoader(
    GLTFLoader,
    "./models/cartLowRes.gltf",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  const bustModelCompress = useLoader(
    GLTFLoader,
    "./models/compress/bust-compress.gltf",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  const manModel = useLoader(
    GLTFLoader,
    "./models/manCompress/DancingMan.gltf",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  const { actions } = useAnimations(highPoly.animations, highPoly.scene);
  console.log(actions)

  useEffect(() => {
    actions?.jump?.play();
  }, []);

  return (
    <>
      <color args={["ivory"]} attach="background" />
      <Stage
        contactShadow={{ opacity: 0.2, blur: 3 }}
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
        <Suspense
          fallback={
            <>
              <Html center>
                <div className=" bg-black/50  superflex h-[100px] w-[300px] rounded-lg z-20">
                  <p className=" text-white font-extrabold text-5xl">
                    Loading...
                  </p>
                </div>
              </Html>
            </>
          }
        >
          <BigModels visible={true} />
        </Suspense>
        <primitive object={bustModelCompress.scene} scale={3} position-x={-0.5}>
          <Html>
            <div></div>
          </Html>
        </primitive>

        <primitive position={[2, 0, 2]} object={cartLowRes.scene}>
          <Html>
            <div className=" bg-black/60 text-white w-36 text-center rounded-md">
              LowRes
            </div>
          </Html>
        </primitive>
        <primitive object={manModel.scene} scale={1} position={[0, 0, 2]}>
          <Html>
            <div className=" bg-black/60 text-white w-36 text-center rounded-md">
              Its our dancing man!
            </div>
          </Html>
        </primitive>
        <primitive object={highPoly.scene} scale={3} position={[0, 0, -2]}>
          <Html>
            <div className=" bg-black/60 text-white w-36 text-center rounded-md">
              HighPoly
            </div>
          </Html>
        </primitive>
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
