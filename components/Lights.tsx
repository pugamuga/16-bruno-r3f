export default function Lights():JSX.Element {
  return (
    <>
      <directionalLight position={[0, 1, 1]} intensity={0.7} />
      <ambientLight intensity={0.3} />
    </>
  )
}