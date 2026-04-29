import { Link } from "react-router-dom";
import { ArrowRight, Bot, Check, Code2, Copy, Headphones, LineChart, MessageSquare, Sparkles, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChatWidget } from "@/components/ChatWidget";
import { useState } from "react";
import heroMesh from "@/assets/hero-mesh.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Products />
      <Features />
      <LiveDemo />
      <EmbedSnippet />
      <Pricing />
      <CTA />
      <SiteFooter />
      <ChatWidget />
    </div>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden gradient-hero text-cream">
    <div className="absolute inset-0 grid-bg-dark opacity-50" />
    <div className="container relative pt-20 pb-32 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/15 mb-8 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-lime" />
          <span className="font-mono text-xs uppercase tracking-widest">Two AI agents · One platform</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-medium mb-6">
          The AI workforce <br />
          <span className="italic font-light">for modern</span> <span className="text-lime">SaaS.</span>
        </h1>
        <p className="text-lg md:text-xl text-cream/70 max-w-xl mb-10 leading-relaxed">
          Auto-resolve support tickets and qualify inbound leads — all in one place.
          Helix replaces 3 SDRs and a support team for the price of one seat.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild variant="hero" size="xl">
            <Link to="/signup">Start free trial — 14 days <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="ghost" size="xl" className="text-cream hover:text-lime hover:bg-cream/5">
            <Link to="/widget">See live demo</Link>
          </Button>
        </div>
        <div className="flex items-center gap-6 mt-10 text-xs text-cream/50 font-mono uppercase tracking-widest">
          <span>No credit card</span>
          <span>·</span>
          <span>SOC 2 ready</span>
          <span>·</span>
          <span>5-min setup</span>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <img src={heroMesh} alt="AI neural mesh" className="rounded-2xl shadow-elegant w-full" width={1536} height={1024} />
        <div className="absolute -bottom-6 -left-6 bg-card text-ink rounded-xl p-4 shadow-elegant border border-ink/10 max-w-[260px] animate-float">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-7 w-7 rounded-full bg-ink flex items-center justify-center"><Bot className="h-3.5 w-3.5 text-lime" /></div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Helix · live</span>
          </div>
          <div className="text-sm">Resolved <b>1,284</b> tickets and booked <b>47</b> meetings today.</div>
        </div>
        <div className="absolute -top-4 -right-4 bg-lime text-ink rounded-xl px-4 py-3 shadow-elegant font-mono text-xs uppercase tracking-widest">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink mr-1.5 animate-pulse" />
          92% auto-resolved
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const logos = ["LINEAR", "STRIPE", "VERCEL", "NOTION", "FIGMA", "CURSOR", "RAYCAST", "ARC"];
  return (
    <div className="border-y border-ink/10 bg-cream py-6 overflow-hidden">
      <div className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
        Loved by 4,200+ teams shipping faster
      </div>
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...logos, ...logos, ...logos].map((l, i) => (
          <span key={i} className="font-display text-2xl font-semibold text-ink/30 tracking-tight">{l}</span>
        ))}
      </div>
    </div>
  );
};

const Products = () => (
  <section id="products" className="container py-28">
    <div className="max-w-2xl mb-16">
      <span className="font-mono text-xs uppercase tracking-widest text-lime bg-ink px-3 py-1.5 rounded-full">Two products</span>
      <h2 className="font-display text-4xl md:text-6xl mt-6 leading-[1.05]">One subscription. <span className="italic">Both AI workforces.</span></h2>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <ProductCard
        tag="Helpdesk AI"
        title="Auto-resolve 90% of support tickets"
        desc="AI agent learns your help docs, answers FAQs, routes complex tickets, and hands off to humans seamlessly."
        stats={[
          { v: "92%", l: "auto-resolved" },
          { v: "8s", l: "avg response" },
          { v: "$120k", l: "saved/yr" },
        ]}
        icon={<MessageSquare className="h-6 w-6" />}
      />
      <ProductCard
        tag="Lead Qualifier"
        title="Score, enrich & book meetings 24/7"
        desc="AI scores 2,500+ inbound leads/month against your ICP, writes personalized outreach, and books meetings on your calendar."
        stats={[
          { v: "3×", l: "lead capacity" },
          { v: "+50%", l: "conversion" },
          { v: "$180k", l: "extra revenue" },
        ]}
        icon={<Target className="h-6 w-6" />}
        highlight
      />
    </div>
  </section>
);

const ProductCard = ({ tag, title, desc, stats, icon, highlight = false }: any) => (
  <div className={`rounded-2xl p-8 border transition-all hover:-translate-y-1 ${highlight ? "bg-ink text-cream border-ink shadow-elegant" : "bg-card border-ink/10 shadow-soft"}`}>
    <div className="flex items-center justify-between mb-6">
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${highlight ? "bg-lime text-ink" : "bg-ink text-lime"}`}>{icon}</div>
      <span className={`font-mono text-xs uppercase tracking-widest ${highlight ? "text-lime" : "text-muted-foreground"}`}>{tag}</span>
    </div>
    <h3 className="font-display text-3xl mb-3 leading-tight">{title}</h3>
    <p className={`mb-8 ${highlight ? "text-cream/70" : "text-muted-foreground"}`}>{desc}</p>
    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-current/10">
      {stats.map((s: any) => (
        <div key={s.l}>
          <div className="font-display text-2xl font-semibold">{s.v}</div>
          <div className={`text-xs font-mono uppercase tracking-wider mt-1 ${highlight ? "text-cream/50" : "text-muted-foreground"}`}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
);

const Features = () => {
  const features = [
    { icon: Zap, title: "Auto-answer FAQs", desc: "Trains on your docs in minutes. Answers in your brand voice." },
    { icon: Target, title: "Smart ticket routing", desc: "ML-based routing by intent, urgency, and customer tier." },
    { icon: Users, title: "Human-in-the-loop", desc: "Seamless handoff with full context. Agents stay in flow." },
    { icon: LineChart, title: "Lead scoring", desc: "Score inbound leads against your ICP in real-time." },
    { icon: MessageSquare, title: "Personalized outreach", desc: "AI writes emails referencing recent company news." },
    { icon: Code2, title: "Embed anywhere", desc: "One-line script. Drops into any website or web app." },
  ];
  return (
    <section id="features" className="bg-ink text-cream py-28">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-lime">— Capabilities</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">Everything your support and sales teams keep asking for.</h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-cream/70 text-lg self-end">
            Production-grade AI workflows you can deploy in an afternoon. No prompt engineering required.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10 rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="bg-ink p-8 hover:bg-ink-soft transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-cream/5 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:text-ink transition-colors">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl mb-2">{f.title}</h3>
              <p className="text-cream/60 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LiveDemo = () => (
  <section className="container py-28">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">— See it work</span>
        <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight mb-6">A real chat happening right now.</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Click the chat bubble in the bottom-right corner. That's the same widget your customers will see, embedded in any site with one line of code.
        </p>
        <ul className="space-y-3">
          {["Trains on your help docs in minutes", "Detects intent and escalates intelligently", "Hands off to a human with full context", "Works in 50+ languages out of the box"].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-lime flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="h-3 w-3 text-ink" strokeWidth={3} /></div>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-lime/20 via-cream to-secondary p-12 flex items-center justify-center shadow-elegant">
          <div className="bg-card rounded-2xl p-6 w-full max-w-sm shadow-elegant border border-ink/10 space-y-4">
            <div className="flex items-end gap-2">
              <div className="h-7 w-7 rounded-full bg-ink flex items-center justify-center"><Bot className="h-3.5 w-3.5 text-lime" /></div>
              <div className="bg-cream px-3 py-2 rounded-2xl rounded-bl-sm text-sm">How can I help today?</div>
            </div>
            <div className="flex items-end gap-2 justify-end">
              <div className="bg-ink text-cream px-3 py-2 rounded-2xl rounded-br-sm text-sm">How do I cancel my subscription?</div>
            </div>
            <div className="flex items-end gap-2">
              <div className="h-7 w-7 rounded-full bg-ink flex items-center justify-center"><Bot className="h-3.5 w-3.5 text-lime" /></div>
              <div className="bg-cream px-3 py-2 rounded-2xl rounded-bl-sm text-sm">You can cancel from <b>Settings → Billing</b>. Want me to walk you through it?</div>
            </div>
            <div className="flex items-end gap-2">
              <div className="h-7 w-7 rounded-full bg-info flex items-center justify-center"><Headphones className="h-3.5 w-3.5 text-cream" /></div>
              <div className="bg-info/10 border border-info/30 px-3 py-2 rounded-2xl rounded-bl-sm text-sm">Maya joined — happy to help if you have questions!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EmbedSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `<script src="https://cdn.helix.ai/widget.js"
  data-org="your-org-id"
  data-theme="light"
  defer></script>`;
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section className="bg-ink text-cream py-28">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-lime">— 1-line install</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight mb-6">Drop it into your site. Done.</h2>
          <p className="text-cream/70 text-lg">
            Paste this snippet before <code className="font-mono text-lime">{`</body>`}</code>. Your AI agent goes live in under a minute. No SDK, no build step.
          </p>
        </div>
        <div className="bg-ink-soft border border-cream/10 rounded-2xl overflow-hidden shadow-elegant">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-cream/10 bg-cream/[0.02]">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
            </div>
            <span className="font-mono text-xs text-cream/50">embed.html</span>
            <button onClick={copy} className="text-xs font-mono text-cream/60 hover:text-lime flex items-center gap-1.5">
              {copied ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
            </button>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto"><code className="text-cream/90 whitespace-pre">{code}</code></pre>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="container py-28">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">— Pricing</span>
      <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">Simple, predictable.</h2>
      <p className="text-muted-foreground mt-4 text-lg">No per-seat surprises. Both products included on every plan.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <PlanCard
        name="Basic"
        price="49"
        desc="For early-stage SaaS validating support automation."
        features={["1 agent seat", "100 tickets / month", "100 leads qualified / mo", "Help docs training", "Email support"]}
      />
      <PlanCard
        name="Pro"
        price="199"
        desc="For growing teams ready to scale support and sales."
        features={["3 agent seats", "500 tickets / month", "2,500 leads qualified / mo", "Custom integrations", "Priority support + SLA", "Calendar booking"]}
        highlight
      />
    </div>
  </section>
);

const PlanCard = ({ name, price, desc, features, highlight = false }: any) => (
  <div className={`rounded-2xl p-8 border ${highlight ? "bg-ink text-cream border-ink shadow-elegant relative" : "bg-card border-ink/10"}`}>
    {highlight && (
      <span className="absolute -top-3 right-6 bg-lime text-ink font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full">Most popular</span>
    )}
    <h3 className="font-display text-3xl mb-1">{name}</h3>
    <p className={`text-sm mb-6 ${highlight ? "text-cream/60" : "text-muted-foreground"}`}>{desc}</p>
    <div className="mb-8">
      <span className="font-display text-6xl font-medium">${price}</span>
      <span className={`ml-1 ${highlight ? "text-cream/60" : "text-muted-foreground"}`}>/month</span>
    </div>
    <Button asChild variant={highlight ? "hero" : "ink"} size="lg" className="w-full">
      <Link to={`/signup?plan=${name.toLowerCase()}`}>Start {name}</Link>
    </Button>
    <ul className="mt-8 space-y-3">
      {features.map((f: string) => (
        <li key={f} className="flex items-start gap-3 text-sm">
          <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${highlight ? "text-lime" : "text-ink"}`} strokeWidth={2.5} />
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const CTA = () => (
  <section className="container pb-28">
    <div className="rounded-3xl bg-lime p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative">
        <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight max-w-3xl mx-auto">
          Replace 3 SDRs and a support team. <span className="italic">By Friday.</span>
        </h2>
        <Button asChild variant="ink" size="xl">
          <Link to="/signup">Start your 14-day trial <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Index;
