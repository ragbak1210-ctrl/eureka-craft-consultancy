import { useEffect, useState } from 'react';

export default function MouseGlow(){

const [pos,setPos]=useState({x:0,y:0})

useEffect(()=>{

const move=(e:MouseEvent)=>{
setPos({
x:e.clientX,
y:e.clientY
})
}

window.addEventListener("mousemove",move)

return()=>window.removeEventListener("mousemove",move)

},[])

return(

<div
style={{

position:"fixed",
top:pos.y-200,
left:pos.x-200,
width:"400px",
height:"400px",
background:"radial-gradient(circle, rgba(255,210,0,0.25), transparent 70%)",
pointerEvents:"none",
zIndex:1,
filter:"blur(40px)",
transition:"all 0.15s ease-out"

}}
/>

)

}
