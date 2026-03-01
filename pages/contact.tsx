import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {

const [formData,setFormData]=useState({
name:'',
email:'',
company:'',
website:'',
industry:'',
message:''
})

const handleChange=(e:any)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit=(e:any)=>{
e.preventDefault()
alert("Thank you. We'll respond personally.")
setFormData({
name:'',
email:'',
company:'',
website:'',
industry:'',
message:''
})
}


return(
<>

<Head>
<title>Contact — Eureka Craft™</title>
<meta name="description" content="Start with clarity. Every meaningful engagement begins with understanding."/>
</Head>



{/* HERO */}

<section className="hero-premium bg-animated-gradient bg-hero-premium relative">

<div className="yellow-glow top-[-120px] left-[-120px]"></div>
<div className="consulting-dots bottom-[60px] right-[10%]"></div>

<div className="container-premium">

<p className="text-accent font-semibold mb-6 tracking-wide">

START WITH CLARITY

</p>


<h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-8">

Every Meaningful Engagement Begins With Understanding

</h1>


<p className="text-premium mb-8">

Some brands struggle because they lack visibility.
Others struggle because they lack clarity.

Most struggle because they cannot see where the real problem begins.

</p>


<p className="text-premium mb-10">

Before campaigns, content calendars, or marketing plans,
we begin with diagnosis.

That is where real progress starts.

</p>


<div className="flex flex-wrap gap-6">

<Link href="/clarity-xray" className="cta-accent">

Start The Clarity X-Ray™

</Link>


<a
href="https://cal.com/eureka-craft-ohs7ru"
target="_blank"
rel="noopener noreferrer"
className="cta-secondary"
>

Schedule a Conversation

</a>

</div>


<p className="text-sm text-gray-500 mt-10">

This conversation is not about selling services.
It is about understanding your brand as it exists today,
and how it can work better tomorrow.

</p>

</div>

</section>



{/* WHEN TO REACH OUT */}

<section className="section-premium bg-white">

<div className="container-premium">

<div className="content-narrow reveal">

<h2 className="text-5xl font-bold mb-8">

You May Be In The Right Place If:

</h2>

<div className="section-divider mb-12"></div>


<div className="space-y-6 text-premium">

<p>• Your business is growing, but your brand story feels unclear.</p>

<p>• Marketing activity feels busy but not effective.</p>

<p>• Your team describes the business differently each time.</p>

<p>• Your content feels inconsistent across platforms.</p>

<p>• Prospects take too long to understand what you do.</p>

<p>• Your brand sounds similar to competitors.</p>

<p>• You feel your expertise is stronger than your visibility.</p>

</div>


<p className="text-premium mt-12">

Clarity often begins with recognising that something isn't aligned.

</p>

</div>

</div>

</section>



{/* PROCESS */}

<section className="section-premium bg-gray-50">

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6 reveal">

What Happens Next

</h2>

<div className="section-divider mb-16"></div>


<div className="grid md:grid-cols-3 gap-10">

<div className="card-premium reveal">

<h3 className="text-xl font-semibold mb-6">

Step 1 — Initial Understanding

</h3>

<p className="text-premium">

We begin with a focused conversation about your business,
your goals, and your current marketing ecosystem.

</p>

<p className="text-premium mt-6">

No presentations.

No generic pitches.

Just structured understanding.

</p>

</div>



<div className="card-premium reveal">

<h3 className="text-xl font-semibold mb-6">

Step 2 — Clarity X-Ray™ Diagnostic

</h3>

<p className="text-premium mb-6">

If there is a clear fit, we move into the Clarity X-Ray™.

</p>

<ul className="space-y-3 text-premium">

<li>• Positioning gaps</li>
<li>• Narrative misalignment</li>
<li>• Messaging inconsistencies</li>
<li>• Trust leaks</li>
<li>• Growth opportunities</li>

</ul>

</div>



<div className="card-premium reveal">

<h3 className="text-xl font-semibold mb-6">

Step 3 — Alignment Roadmap

</h3>

<p className="text-premium mb-6">

You receive a structured clarity roadmap that shows:

</p>

<ul className="space-y-3 text-premium">

<li>• Where your brand stands today</li>
<li>• What needs alignment</li>
<li>• What to prioritize</li>
<li>• How growth can be structured</li>

</ul>

</div>


</div>


<p className="text-center text-premium mt-16 reveal">

This process removes guesswork for both of us.

</p>

</div>

</section>



{/* FORM */}

<section id="form" className="section-premium bg-grid relative">

<div className="yellow-glow bottom-[-200px] left-[20%]"></div>

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6">

Tell Us About Your Brand

</h2>

<div className="section-divider mb-10"></div>


<p className="text-premium mb-12">

A few details help us understand where to begin.

</p>


<form onSubmit={handleSubmit} className="space-y-6">

<input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full input-premium"/>

<input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full input-premium"/>

<input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required className="w-full input-premium"/>

<input name="website" placeholder="Website or LinkedIn" value={formData.website} onChange={handleChange} className="w-full input-premium"/>

<input name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} className="w-full input-premium"/>

<textarea name="message" placeholder="Tell us about your brand" value={formData.message} onChange={handleChange} rows={6} required className="w-full input-premium resize-none"/>

<button className="cta-accent w-full">

Begin With Clarity

</button>

</form>


<p className="text-sm text-gray-500 mt-6 text-center">

We respond personally to every message.

No automated responses.

No generic follow-ups.

</p>

</div>

</section>



{/* DIRECT CONTACT */}

<section className="section-premium bg-gray-50">

<div className="container-premium text-center reveal">

<h2 className="text-4xl font-bold mb-8">

Prefer A Direct Conversation?

</h2>


<p className="text-premium mb-10">

Some conversations are easier to start directly.

</p>


<div className="space-y-4 text-lg">

<p>

Email:

<a href="mailto:consult@eurekacraft.in"
className="text-accent font-semibold ml-2">

consult@eurekacraft.in

</a>

</p>


<p>

Phone:

<span className="ml-2 font-semibold">

+91 9548512493

</span>

</p>


<p>

LinkedIn:

<a
href="https://www.linkedin.com/company/eureka-craft-byraghav/"
className="ml-2 font-semibold text-accent"
>

Eureka Craft

</a>

</p>

</div>


<p className="text-premium mt-10">

Clarity often starts with a simple conversation.

</p>

</div>

</section>



{/* TRUST STRIP */}

<section className="section-premium bg-black text-white">

<div className="container-premium text-center reveal">

<h2 className="text-4xl font-bold mb-8">

Consulting Begins With Understanding

</h2>


<p className="text-gray-300 text-xl max-w-3xl mx-auto">

Eureka Craft works with founders and leadership teams who want
their brand to reflect the strength of their business.

</p>


<p className="text-gray-400 mt-8">

Every engagement begins with a diagnosis
and grows through alignment.

</p>


<p className="text-accent mt-10 font-semibold">

Because clarity is built intentionally.

</p>

</div>

</section>



{/* FINAL CTA */}

<section className="section-premium bg-white">

<div className="container-premium text-center reveal">

<h2 className="text-5xl font-bold mb-8">

See What Your Brand Looks Like From The Outside

</h2>


<p className="text-premium mb-10 max-w-2xl mx-auto">

Most leaders experience their business from the inside.

The Clarity X-Ray™ shows you how your brand is experienced
from the outside.

And that perspective changes everything.

</p>


<Link href="/clarity-xray" className="cta-accent inline-block">

Start The Clarity X-Ray™

</Link>

</div>

</section>



</>
)

}
