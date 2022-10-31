export default function Knot(): JSX.Element {
  return (
    <>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial color="hotpink" />
      </mesh>
    </>
  );
}
