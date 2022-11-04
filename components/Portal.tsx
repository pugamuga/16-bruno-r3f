import {
  OrbitControls,
  shaderMaterial,
  Sparkles,
  Stage,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { DoubleSide } from "three";
import portalVertexShader from "../public/portalShaders/vertex"
import portalFragmentShader from "../public/portalShaders/fragment"
import * as THREE from "three"
import { extend } from "@react-three/fiber";

const PortalMaterial = shaderMaterial(
    {uTime:0,
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),},
    portalVertexShader,
    portalFragmentShader

)

extend({PortalMaterial})



export default function Portal(): JSX.Element {
  const portal = useGLTF("./models/portal/portal.glb");
  const bakedTexture = useTexture("./models/portal/baked.jpg");

  return (
    <>
      <Sparkles size={6} scale={[4, 2, 4]} position={[0, 1, 0]} speed={.2} count={40}/>
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping={true}
        makeDefault
      />
      <color args={["#160833"]} attach="background" />
      <Stage>
        <mesh geometry={portal.nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={portal.nodes.poleLightA.geometry}
          position={portal.nodes.poleLightA.position}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>
        <mesh
          geometry={portal.nodes.poleLightB.geometry}
          position={portal.nodes.poleLightB.position}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>
        <mesh
          geometry={portal.nodes.portalLight.geometry}
          position={portal.nodes.portalLight.position}
          rotation={portal.nodes.portalLight.rotation}
          scale={portal.nodes.portalLight.scale}
        >
          {/* <meshBasicMaterial side={DoubleSide} color={"#ffffe5"}/> */}
           {/* @ts-ignore */}
        <portalMaterial/>
        </mesh>
      </Stage>
    </>
  );
}
