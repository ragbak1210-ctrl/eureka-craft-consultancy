import Head from 'next/head';
import { useState } from 'react';

export default function ClarityXRay() {

const [formData,setFormData]=useState({
name:'',
email:'',
company:'',
website:'',
});

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};

const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault();
alert("Thank you! We'll be in touch shortly.");
setFormData({name:'',email:'',company:'',website:''});
};


return(

<>

<Head>

<title>The Clarity X-Ray™ — Eureka Craft</title>

<meta
name="description"
content="The Clarity X-Ray™ is Eureka Craft’s proprietary blindspot audit designed to diagnose positioning, messaging, and narrative gaps."
/>

</Head>



{/* HERO */}

<section className="hero-premium bg-hero-premium relative">

<div className="yellow-glow top-[-120px] left-[-120px]"></div>
<div className="circle-outline top-[200px] right-[10%]"></div>
<div className="consulting-dots bottom-[80px] left-[10%]"></div>

<div className="container-premium">

<p className="text-accent font-semibold mb-6 tracking-wide">
THE CLARITY X-RAY™
</p>


<h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-6">
Most Brands Don't Need More Marketing.
</h1>


<h1 className="text-6xl md:text-7xl font-bold text-accent heading-luxury mb-10">
They Need Better Diagnosis.
</h1>


<p className="text-premium mb-8">
The Clarity X-Ray™ is Eureka Craft’s proprietary blindspot audit designed
to reveal the hidden gaps between your business strength and your market perception.
</p>


<p className="text-premium mb-10">
Before strategies. Before campaigns. Before content.
<br/>
<strong>We diagnose.</strong>
</p>


<div className="flex flex-wrap gap-6">

<a href="#pricing" className="cta-accent">
Discover Your Blindspots
</a>

<a href="#analysis" className="cta-secondary">
See What We Analyze
</a>

</div>

</div>

</section>



{/* WHY AUDITS FAIL */}

<section className="section-premium bg-white reveal">

<div className="container-premium">

<div className="content-narrow">

<h2 className="text-5xl font-bold mb-6">
Why Traditional Audits Fall Short
</h2>

<div className="section-divider mb-10"></div>


<p className="text-premium mb-8">
Most brand audits focus on what is easy to measure.
</p>


<div className="grid md:grid-cols-2 gap-10 mb-10">

<div className="card-premium">

<ul className="space-y-2 text-soft">
<li>Engagement rates</li>
<li>Post frequency</li>
<li>Website traffic</li>
<li>Follower growth</li>
</ul>

</div>


<div className="card-premium">

<ul className="space-y-2 text-soft">
<li>Good content but weak positioning</li>
<li>Strong products but unclear messaging</li>
<li>Active marketing but low trust</li>
</ul>

</div>

</div>


<p className="text-xl font-semibold">
Traditional audits fix the output.
<br/>
The Clarity X-Ray™ fixes the origin.
</p>

</div>

</div>

</section>



{/* DIAGNOSTIC */}

<section className="section-premium bg-grid relative">

<div className="yellow-glow bottom-[-200px] right-[10%]"></div>

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6 reveal">
A True Diagnostic, Not a Checklist
</h2>

<div className="section-divider mb-12 reveal"></div>


<div className="content-narrow reveal">

<p className="text-premium mb-6">
The Clarity X-Ray™ is a structured diagnostic process designed
to understand your brand the way your market experiences it.
</p>


<p className="text-premium">
We examine your business across strategic and perceptual layers
to uncover where clarity breaks down.
</p>

</div>

</div>

</section>



{/* WHAT WE ANALYZE */}

<section id="analysis" className="section-premium bg-white">

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6 reveal">
Inside The Clarity X-Ray™
</h2>

<div className="section-divider mb-16 reveal"></div>


<div className="grid md:grid-cols-2 gap-10">

{[
"Brand Positioning",
"Messaging Architecture",
"Website Clarity Analysis",
"Content Narrative",
"LinkedIn Presence",
"Audience Alignment",
"Trust Signals"
].map((item,index)=>(

<div key={index} className="card-premium reveal">
<h3 className="text-2xl font-semibold">
{item}
</h3>
</div>

))}

</div>

</div>

</section>



{/* DELIVERABLES */}

<section className="section-premium bg-gray-50">

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6 reveal">
What You Receive
</h2>

<div className="section-divider mb-16 reveal"></div>


<div className="grid md:grid-cols-2 gap-10">

{[
"Blindspot Report",
"Narrative Diagnosis",
"Alignment Roadmap",
"Flow Plan"
].map((item,index)=>(

<div key={index} className="card-premium reveal">
<h3 className="text-xl font-semibold">
{item}
</h3>
</div>

))}

</div>

</div>

</section>



{/* PRICING */}

<section id="pricing" className="section-premium bg-white">

<div className="container-premium">

<div className="card-premium max-w-xl mx-auto text-center reveal">

<p className="text-accent font-semibold mb-4">
INVESTMENT
</p>


<h2 className="text-3xl font-bold mb-4">
The Clarity X-Ray™
</h2>


<p className="text-5xl font-bold text-accent mb-6">
₹25,000
</p>


<p className="text-soft mb-8">
One-Time Diagnostic
</p>


<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
required
className="w-full px-4 py-3 border border-gray-200 rounded focus:border-accent outline-none"
/>


<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
className="w-full px-4 py-3 border border-gray-200 rounded focus:border-accent outline-none"
/>


<input
type="text"
name="company"
placeholder="Company"
value={formData.company}
onChange={handleChange}
required
className="w-full px-4 py-3 border border-gray-200 rounded focus:border-accent outline-none"
/>


<input
type="text"
name="website"
placeholder="Website"
value={formData.website}
onChange={handleChange}
className="w-full px-4 py-3 border border-gray-200 rounded focus:border-accent outline-none"
/>



<button className="cta-accent w-full">
Start With The Clarity X-Ray™
</button>


</form>

</div>

</div>

</section>


</>

);

}
