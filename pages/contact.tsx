import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {

const [formData,setFormData]=useState({
name:'',
email:'',
company:'',
website:'',
industry:'',
message:''
})


const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
})
}


const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
console.log(formData)
alert("Thank you. We will respond personally.")
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
<meta name="description" content="Start your clarity journey with Eureka Craft."/>
</Head>



{/* HERO */}

<section className="section-spacing bg-white">

<div className="container-wide max-w-3xl">

<h1 className="text-5xl md:text-6xl font-bold mb-6">
Start With Clarity
</h1>


<p className="text-xl text-gray-600 mb-8">

Every meaningful engagement begins with understanding.

</p>


<div className="space-y-6 text-lg text-gray-600">

<p>

Some brands struggle because they lack visibility.
Others struggle because they lack clarity.

Most struggle because they cannot see where the real problem begins.

</p>

<p>

Before campaigns, content calendars, or marketing plans — we begin with diagnosis.

That is where real progress starts.

</p>

<p className="font-semibold text-black">

This conversation is not about selling services.
It is about understanding your brand as it exists today — and how it can work better tomorrow.

</p>

</div>



<div className="mt-10 flex flex-col sm:flex-row gap-4">

<Link href="/clarity-xray" className="cta-accent">

Start The Clarity X-Ray™

</Link>


<Link href="#contactform" className="cta-secondary">

Schedule a Conversation

</Link>

</div>

</div>

</section>



{/* WHEN TO REACH OUT */}

<section className="section-spacing bg-gray-50">

<div className="container-wide max-w-3xl">

<h2 className="text-4xl md:text-5xl font-bold mb-10">

You May Be In The Right Place If:

</h2>


<div className="space-y-5 text-lg text-gray-700">

<p>• Your business is growing, but your brand story feels unclear.</p>

<p>• Marketing activity feels busy but not effective.</p>

<p>• Your team describes the business differently each time.</p>

<p>• Your content feels inconsistent across platforms.</p>

<p>• Prospects take too long to understand what you do.</p>

<p>• Your brand sounds similar to competitors.</p>

<p>• You feel your expertise is stronger than your visibility.</p>

</div>


<p className="mt-10 text-lg text-black font-semibold">

Clarity often begins with recognizing that something isn't aligned.

</p>

</div>

</section>



{/* WHAT HAPPENS NEXT */}

<section className="section-spacing bg-white">

<div className="container-wide">

<h2 className="text-4xl md:text-5xl font-bold mb-16">

What Happens Next

</h2>


<div className="grid md:grid-cols-3 gap-10">



<div className="border border-gray-300 p-8 rounded">

<h3 className="text-xl font-bold mb-4">

Initial Understanding

</h3>

<p className="text-gray-600">

We begin with a focused conversation about your business, your goals, and your current marketing ecosystem.

</p>

<p className="text-gray-600 mt-4">

No presentations.

No generic pitches.

Just structured understanding.

</p>

</div>



<div className="border border-gray-300 p-8 rounded">

<h3 className="text-xl font-bold mb-4">

Clarity X-Ray™ Diagnostic

</h3>

<p className="text-gray-600 mb-4">

If there is a clear fit, we move into the Clarity X-Ray™ — our structured blindspot analysis designed to reveal:

</p>


<p className="text-gray-600">

• Positioning gaps<br/>
• Narrative misalignment<br/>
• Messaging inconsistencies<br/>
• Trust leaks<br/>
• Growth opportunities

</p>

</div>



<div className="border border-gray-300 p-8 rounded">

<h3 className="text-xl font-bold mb-4">

Alignment Roadmap

</h3>

<p className="text-gray-600 mb-4">

You receive a structured clarity roadmap that shows:

</p>

<p className="text-gray-600">

• Where your brand stands today<br/>
• What needs alignment<br/>
• What should be prioritized<br/>
• How growth can be structured

</p>

</div>


</div>


<p className="text-center text-lg font-semibold mt-14">

This process removes guesswork — for both of us.

</p>

</div>

</section>



{/* CONTACT FORM */}

<section id="contactform" className="section-spacing bg-gray-50">

<div className="container-wide max-w-3xl">

<h2 className="text-4xl md:text-5xl font-bold mb-6">

Tell Us About Your Brand

</h2>

<p className="text-lg text-gray-600 mb-10">

A few details help us understand where to begin.

</p>



<form onSubmit={handleSubmit} className="space-y-6">

<input
name="name"
placeholder="Full Name"
value={formData.name}
onChange={handleChange}
required
className="w-full px-4 py-3 border border-gray-300 rounded focus:border-accent outline-none"
/>


<input
name="email"
type="email"
placeholder="Email Address"
value={formData.email}
onChange={handleChange}
required
className="w-full px-4 py-3 border border-gray-300 rounded focus:border-accent outline-none"
/>


<input
name="company"
placeholder="Company Name"
value={formData.company}
onChange={handleChange}
required
className="w-full px-4 py-3 border border-gray-300 rounded focus:border-accent outline-none"
/>


<input
name="website"
placeholder="Website or LinkedIn"
value={formData.website}
onChange={handleChange}
className="w-full px-4 py-3 border border-gray-300 rounded focus:border-accent outline-none"
/>



<input
name="industry"
placeholder="Industry"
value={formData.industry}
onChange={handleChange}
className="w-full px-4 py-3 border border-gray-300 rounded focus:border-accent outline-none"
/>



<textarea
name="message"
rows={6}
placeholder="Message"
value={formData.message}
onChange={handleChange}
required
className="w-full px-4 py-3 border border-gray-300 rounded focus:border-accent outline-none resize-none"
/>



<button className="cta-accent w-full">

Begin With Clarity

</button>

</form>



<p className="text-sm text-gray-500 mt-6">

We respond personally to every message.
No automated responses.
No generic follow-ups.

</p>

</div>

</section>



{/* DIRECT CONTACT */}

<section className="section-spacing bg-white">

<div className="container-wide text-center max-w-2xl">

<h2 className="text-4xl font-bold mb-8">

Prefer A Direct Conversation?

</h2>


<p className="text-lg text-gray-600 mb-10">

Some conversations are easier to start directly.

If you prefer to speak with us instead of filling out a form, you can reach us here.

</p>


<div className="space-y-4 text-lg">

<p>

Email:
<span className="text-accent font-semibold ml-2">
hello@eurekacraft.com
</span>

</p>


<p>

Phone:
<span className="text-accent font-semibold ml-2">
+91 XXXXX XXXXX
</span>

</p>


<p>

LinkedIn:
<span className="text-accent font-semibold ml-2">
Eureka Craft
</span>

</p>

</div>


<p className="mt-10 font-semibold">

Clarity often starts with a simple conversation.

</p>

</div>

</section>



{/* TRUST STRIP */}

<section className="section-spacing bg-gray-50">

<div className="container-wide text-center max-w-3xl">

<h2 className="text-4xl font-bold mb-8">

Consulting Begins With Understanding

</h2>


<p className="text-lg text-gray-600 mb-6">

Eureka Craft works with founders and leadership teams who want their brand to reflect the strength of their business.

</p>


<p className="text-lg text-gray-600 mb-6">

Our work is not built on templates or assumptions.

Every engagement begins with diagnosis — and grows through alignment.

</p>


<p className="text-lg font-semibold">

Because clarity is not created by chance.

It is built intentionally.

</p>

</div>

</section>



{/* FINAL CTA */}

<section className="section-spacing bg-white">

<div className="container-wide text-center max-w-3xl">

<h2 className="text-4xl md:text-5xl font-bold mb-6">

See What Your Brand Looks Like From The Outside

</h2>


<p className="text-lg text-gray-600 mb-10">

Most leaders experience their business from the inside.

The Clarity X-Ray™ shows you how your brand is experienced from the outside.

And that perspective changes everything.

</p>


<Link href="/clarity-xray" className="cta-accent">

Start The Clarity X-Ray™

</Link>


</div>

</section>



</>
)

}
