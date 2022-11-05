import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Effects():JSX.Element {
  return (
    <>
      <EffectComposer>
        {/* <Noise premultiply
        blendFunction={BlendFunction.AVERAGE}
        />
        <Vignette
        offset={.3}
        darkness={.9}
        blendFunction={BlendFunction.NORMAL}
        />
        <Bloom mipmapBlur/> */}
        {/* <DepthOfField
        focusDistance={.025}
        bokehScale={6}
        focalLength={.025}        
        /> */}
      </EffectComposer>
    </>
  )
}