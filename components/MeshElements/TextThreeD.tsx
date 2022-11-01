import { Float, Text } from "@react-three/drei";

export default function TextThreeD(): JSX.Element {
  return (
    <>
      {/* @ts-ignore */}
      <Float 
      speed={5}
      floatIntensity={2}
      >
        {/* @ts-ignore */}
        <Text
          font="./fonts/kolker-brush-v3-latin-regular.woff"
          fontSize={0.5}
          color={"mediumpurple"}
          position-y={1}
          maxWidth={1}
          textAlign="center"
        >
          Some cool text
        </Text>
      </Float>
    </>
  );
}
