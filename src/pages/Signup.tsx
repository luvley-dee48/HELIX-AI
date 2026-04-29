import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Bot, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [plan, setPlan] = useState(params.get("plan") || "pro");
  const [step, setStep] = useState<"signup" | "checkout">("signup");
  const [form, setForm] = useState({ email: "", password: "", business: "" });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.business) {
      toast.error("Please fill out all fields");
      return;
    }
    toast.success(`Organization "${form.business}" created`);
    setStep("checkout");
  };

  const handleCheckout = () => {
    toast.success("Redirecting to secure checkout…");
    setTimeout(() => navigate("/dashboard"), 900);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left panel */}
      <div className="bg-ink text-cream p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-50" />
        <div className="relative">
          <Link to="/" className="flex items-center gap-2 mb-16">
            <div className="h-8 w-8 rounded-lg bg-lime flex items-center justify-center">
              <Bot className="h-4 w-4 text-ink" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-semibold">Helix.</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            Your AI workforce <br /><span className="italic text-lime">starts in 2 minutes.</span>
          </h1>
          <ul className="mt-10 space-y-4">
            {["14-day free trial", "No credit card required", "Cancel anytime", "Both products included"].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-lime flex items-center justify-center"><Check className="h-3 w-3 text-ink" strokeWidth={3} /></div>
                <span className="text-cream/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <blockquote className="relative border-l-2 border-lime pl-4 max-w-md">
          <p className="font-display text-xl italic mb-3">"We replaced two SDRs and our entire L1 support tier in 6 weeks. Helix paid for itself the first month."</p>
          <footer className="text-xs font-mono uppercase tracking-widest text-cream/50">— Sarah Chen, Head of Ops at Loop</footer>
        </blockquote>
      </div>

      {/* Right panel */}
      <div className="p-10 lg:p-16 bg-cream flex items-center">
        <div className="w-full max-w-md mx-auto">
          {step === "signup" ? (
            <>
              <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Step 1 of 2</span>
                <h2 className="font-display text-3xl mt-2">Create your account</h2>
              </div>
              <form onSubmit={handleSignup} className="space-y-5">
                <div>
                  <Label htmlFor="business">Business name</Label>
                  <Input id="business" placeholder="Acme Inc." className="mt-1.5 h-11 bg-card border-ink/15" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" placeholder="you@acme.com" className="mt-1.5 h-11 bg-card border-ink/15" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Min 8 characters" className="mt-1.5 h-11 bg-card border-ink/15" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>
                <Button type="submit" variant="ink" size="lg" className="w-full">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By continuing you agree to our Terms & Privacy.
                </p>
              </form>
            </>
          ) : (
            <>
              <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Step 2 of 2</span>
                <h2 className="font-display text-3xl mt-2">Choose your plan</h2>
                <p className="text-muted-foreground mt-2 text-sm">Free for 14 days. Pick what fits today.</p>
              </div>
              <div className="space-y-3 mb-6">
                <PlanRow id="basic" name="Basic" price="49" features="1 agent · 100 tickets/mo" selected={plan === "basic"} onClick={() => setPlan("basic")} />
                <PlanRow id="pro" name="Pro" price="199" features="3 agents · 500 tickets/mo · Lead qualifier" selected={plan === "pro"} onClick={() => setPlan("pro")} highlight />
              </div>
              <Button onClick={handleCheckout} variant="ink" size="lg" className="w-full">
                Continue to checkout <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Powered by Stripe · You won't be charged today.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const PlanRow = ({ name, price, features, selected, onClick, highlight }: any) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
      selected ? "border-ink bg-card shadow-soft" : "border-ink/10 bg-card/50 hover:border-ink/30"
    }`}
  >
    <div>
      <div className="flex items-center gap-2">
        <span className="font-display text-lg font-semibold">{name}</span>
        {highlight && <span className="font-mono text-[10px] uppercase tracking-widest bg-lime text-ink px-2 py-0.5 rounded-full">Popular</span>}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5">{features}</div>
    </div>
    <div className="text-right">
      <span className="font-display text-2xl">${price}</span>
      <span className="text-xs text-muted-foreground">/mo</span>
    </div>
  </button>
);

export default Signup;
