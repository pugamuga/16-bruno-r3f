import { Clone, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Html } from "next/document";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface IProps {
  visible: boolean;
}

export default function BigModels({ visible }: IProps): JSX.Element | null {
  const bustModel = useGLTF("./models/bust.glb")

  const cart = useGLTF("./models/cart.gltf")

  const tree = useGLTF("./models/tree/island_tree_02_1k.gltf");

  if (!visible) {
    return null;
  }
  return (
    <>
      <Clone object={bustModel.scene} scale={3} position-x={0.5} />
      
      <primitive position={[-2, 0, 2]} object={cart.scene}></primitive>
      <primitive position={[-4, 0, 2]} object={tree.scene}></primitive>
    </>
  );
}

useGLTF.preload("./models/tree/island_tree_02_1k.gltf");