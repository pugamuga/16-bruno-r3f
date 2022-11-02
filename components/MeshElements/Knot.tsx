import { Html } from "@react-three/drei";
import { useState } from "react";

export default function Knot(): JSX.Element {
  const [testNew, setTestNew] = useState<number | string>(10);

  return (
    <>
      <mesh
        onClick={() => {
          if (testNew === 10) {
            setTestNew("legjmoeboer;bwrmboiw");
          }
          if (testNew === "legjmoeboer;bwrmboiw") {
            setTestNew(10);
          }
        }}
      >
        <torusKnotGeometry />
        <meshNormalMaterial color="hotpink" />
      </mesh>
      <Html>
        <p>{testNew}</p>
      </Html>
    </>
  );
}
