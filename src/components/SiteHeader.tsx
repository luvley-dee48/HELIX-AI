import { Link, useLocation } from "react-router-dom";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SiteHeader = () => {
  const { pathname } = useLocation();
  const navItems = [
    { to: "/#products", label: "Products" },
    { to: "/#features", label: "Features" },
    { to: "/#pricing", label: "Pricing" },
    { to: "/widget", label: "Live demo" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/70 border-b border-ink/10">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-ink flex items-center justify-center">
            <Bot className="h-4 w-4 text-lime" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">Helix<span className="text-lime">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.to} href={n.to} className="text-sm text-ink/70 hover:text-ink transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link to="/signup">Sign in</Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/signup">Start free trial</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
