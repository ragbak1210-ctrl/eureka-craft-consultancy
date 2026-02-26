import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navigation() {

const [mobileMenuOpen,setMobileMenuOpen]=useState(false);

const router=useRouter();


const navLinks=[

{href:"/",label:"Home"},
{href:"/about",label:"About"},
{href:"/services",label:"Services"},
{href:"/clarity-xray",label:"Clarity X-Ray™"},
{href:"/industries",label:"Industries"},
{href:"/case-studies",label:"Case Studies"},
{href:"/insights",label:"Insights"}

]


return(

<nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

<div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 py-5 flex justify-between items-center">



{/* LOGO */}

<Link href="/" className="flex items-center gap-3">

<img
src="/logo.png"
alt="Eureka Craft"
className="h-24 md:h-30 w-auto"
/>

</Link>



{/* DESKTOP MENU */}

<div className="hidden md:flex gap-10 items-center">

{navLinks.map(link=>{

const active=router.pathname===link.href

return(

<Link
key={link.href}
href={link.href}

className={`relative text-sm font-medium transition

${active
? "text-black"
: "text-gray-600 hover:text-black"
}

`}
>

{link.label}



{active && (

<span className="absolute left-0 -bottom-3 w-full h-[3px] bg-accent">

</span>

)}


</Link>

)

})}



<Link
href="/contact"
className="cta-primary text-xs"
>

Contact

</Link>


</div>



{/* MOBILE BUTTON */}

<button
className="md:hidden"
onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
>

<svg
className="w-6 h-6"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>

<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M4 6h16M4 12h16M4 18h16"
/>

</svg>

</button>




{/* MOBILE MENU */}

{mobileMenuOpen && (

<div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">

<div className="flex flex-col p-8 gap-5">

{navLinks.map(link=>{

const active=router.pathname===link.href

return(

<Link
key={link.href}
href={link.href}

className={`text-sm font-medium

${active
? "text-accent font-semibold"
: "text-gray-700"
}

`}
>

{link.label}

</Link>

)

})}



<Link
href="/contact"
className="cta-primary text-xs inline-block w-fit mt-2"
>

Contact

</Link>



</div>

</div>

)}



</div>

</nav>

)
}
