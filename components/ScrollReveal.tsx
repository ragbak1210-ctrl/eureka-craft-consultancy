import { useEffect } from 'react';

export default function ScrollReveal(){

useEffect(()=>{

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-in-visible")

}

})

},

{
threshold:0.2
}

)

document.querySelectorAll(".fade-in")
.forEach(el=>observer.observe(el))

},[])

return null

}
