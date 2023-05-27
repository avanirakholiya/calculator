import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div style={{border:"2px solid black",marginBottom:"10px", borderRadius: "10px",height:"50px",width:"345px",fontSize:"25px"}}>

    <Textfit className="screen" style={{paddingTop:"8px",paddingBottom:"10px",float:"right"}} max={40}  mode="single">{calc.num ? calc.num : calc.res}</Textfit>
    </div>
  )
}

export default Screen