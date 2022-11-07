import { useGLTF, useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export default function Katana(props: GroupProps): JSX.Element {
  const katana = useGLTF("./models/katana/katana4Baked.glb");
  const bakedTexture = useTexture("./models/katana/bakedTextureKatana.jpg");
  console.log(katana.nodes.Blade);
  return (
    <>
      <group {...props}>
        <mesh
          position={[1,0,-.095]}
          rotation={katana.nodes.Blade.rotation}
          geometry={katana.nodes.Blade.geometry}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          position={katana.nodes.End_Piece.position}
          geometry={katana.nodes.End_Piece.geometry}
          rotation={katana.nodes.End_Piece.rotation}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          position={katana.nodes.Handguard.position}
          geometry={katana.nodes.Handguard.geometry}
          rotation={katana.nodes.Handguard.rotation}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          position={katana.nodes.Handle.position}
          geometry={katana.nodes.Handle.geometry}
          rotation={katana.nodes.Handle.rotation}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          position={katana.nodes.Handle_Cloth.position}
          geometry={katana.nodes.Handle_Cloth.geometry}
          rotation={katana.nodes.Handle_Cloth.rotation}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          position={katana.nodes.Hilt.position}
          geometry={katana.nodes.Hilt.geometry}
          rotation={katana.nodes.Hilt.rotation}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          position={katana.nodes.Hilt_2.position}
          geometry={katana.nodes.Hilt_2.geometry}
          rotation={katana.nodes.Hilt_2.rotation}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
      </group>
    </>
  );
}
