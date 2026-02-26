import { useEffect } from 'react';

export default function ParallaxProvider(){

useEffect(()=>{

const handleScroll=()=>{

document.documentElement.style.setProperty(
'--scrollY',
`${window.scrollY * 0.2}px`
)

}

window.addEventListener('scroll',handleScroll)

return()=>window.removeEventListener('scroll',handleScroll)

},[])

return null

}
