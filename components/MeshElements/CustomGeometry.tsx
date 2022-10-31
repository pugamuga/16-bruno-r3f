import { useMemo, useRef } from "react";
//@ts-ignore
import { DoubleSide, BufferGeometry } from "three";
import Lights from "../Lights";

export default function CustomGeometry(): JSX.Element {
    const verticlesCount = 10 * 3;
    const geometryRef = useRef<BufferGeometry>(null);

  geometryRef?.current?.computeVertexNormals();

  const position = useMemo(() => {
    const position = new Float32Array(verticlesCount * 3);

    for (let i = 0; i < verticlesCount * 3; i++) {
      position[i] = (Math.random() - 0.5) * 3;
    }
    return position;
    
  }, []);

  return (
    <>
      <mesh position={[0, 0.5, 0]} scale={0.5}>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach={"attributes-position"}
            count={verticlesCount}
            itemSize={3}
            array={position}
          />
        </bufferGeometry>
        <meshStandardMaterial color={"orange"} side={DoubleSide} />
      </mesh>
    </>
  );
}
