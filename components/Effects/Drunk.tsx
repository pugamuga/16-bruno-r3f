import { forwardRef } from "react"
import DrunkEffect from "./DrunkEffect"

interface IProps{
  frequency?:number
  amplitude?:number
  blendFunction?:any
  offset?: number;
}

export default forwardRef(function Drunk(props:IProps, ref):JSX.Element {

  const effect  = new DrunkEffect(props)
  return (
    <>
      <primitive ref={ref} object={effect}/>
    </>
  )
})