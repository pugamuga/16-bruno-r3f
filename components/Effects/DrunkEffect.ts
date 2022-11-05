import { BlendFunction, Effect } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = `
uniform float frequency;
uniform float amplitude;
uniform float offset;

void mainUv(inout vec2 uv){
  uv.y += sin(uv.x * frequency + offset) * amplitude;
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
   
  outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
  
}`;

interface IProps {
  frequency?: number;
  amplitude?: number;
  blendFunction?: any;
  offset?: number;
}

export default class DrunkEffect extends Effect {
  constructor({
    frequency = 20,
    amplitude = 0.1,
    blendFunction = BlendFunction.DARKEN,
  }: IProps) {
    super("DrunkEffect", fragmentShader, {
      blendFunction,
      uniforms: new Map([
        ["frequency", new Uniform(frequency)],
        ["amplitude", new Uniform(amplitude)],
        ["offset", new Uniform(0)],
      ]),
    });
  }

  update(renderer:any, inputBuffer:any, deltaTime:any) {
    {/* @ts-ignore */}
    this.uniforms.get("offset").value += deltaTime
  }
}
