import { useEffect, useState } from "react";
import { Bot, MessageSquare, Send, User, X, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { id: number; role: "user" | "ai" | "agent"; text: string };

const SCRIPTED: Msg[] = [
  { id: 1, role: "ai", text: "Hi 👋 I'm Helix, your AI assistant. How can I help today?" },
];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(SCRIPTED);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { id: Date.now(), role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply: Msg = {
        id: Date.now() + 1,
        role: "ai",
        text: "Got it — I found 3 articles in your help center that match. Want me to summarize, or escalate to a human agent?",
      };
      setMessages((m) => [...m, reply]);
      setTyping(false);
    }, 1100);
  };

  useEffect(() => {
    if (open && messages.length === 1) {
      const t = setTimeout(() => {
        setMessages((m) => [
          ...m,
          { id: 2, role: "agent", text: "I'm Maya, here if Helix can't solve it. 👋" },
        ]);
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [open, messages.length]);

  return (
    <>
      <button
        aria-label="Open chat"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 h-14 px-5 rounded-full bg-ink text-cream shadow-elegant flex items-center gap-2 hover:scale-105 transition-transform animate-pulse-glow"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5 text-lime" />}
        <span className="font-medium text-sm">{open ? "Close" : "Need help?"}</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[520px] bg-card rounded-2xl shadow-elegant border border-ink/10 flex flex-col animate-slide-up overflow-hidden">
          <div className="bg-ink text-cream p-4 flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-lime flex items-center justify-center">
              <Bot className="h-5 w-5 text-ink" />
            </div>
            <div className="flex-1">
              <div className="font-display font-semibold">Helix Support</div>
              <div className="text-xs text-cream/60 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" /> AI + human agents online
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/40">
            {messages.map((m) => (
              <Message key={m.id} msg={m} />
            ))}
            {typing && (
              <div className="flex items-end gap-2">
                <div className="h-7 w-7 rounded-full bg-ink flex items-center justify-center"><Bot className="h-3.5 w-3.5 text-lime" /></div>
                <div className="bg-card border border-ink/10 px-3 py-2 rounded-2xl rounded-bl-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/40 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/40 animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/40 animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-ink/10 bg-card flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="border-ink/15"
            />
            <Button size="icon" onClick={send} variant="hero">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const Message = ({ msg }: { msg: Msg }) => {
  if (msg.role === "user") {
    return (
      <div className="flex items-end gap-2 justify-end">
        <div className="bg-ink text-cream px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%] text-sm">{msg.text}</div>
        <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center"><User className="h-3.5 w-3.5" /></div>
      </div>
    );
  }
  if (msg.role === "agent") {
    return (
      <div className="flex items-end gap-2">
        <div className="h-7 w-7 rounded-full bg-info flex items-center justify-center"><Headphones className="h-3.5 w-3.5 text-cream" /></div>
        <div className="bg-info/10 border border-info/30 text-ink px-3 py-2 rounded-2xl rounded-bl-sm max-w-[75%] text-sm">
          <div className="text-[10px] font-mono uppercase tracking-wider text-info mb-0.5">Human agent</div>
          {msg.text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-2">
      <div className="h-7 w-7 rounded-full bg-ink flex items-center justify-center"><Bot className="h-3.5 w-3.5 text-lime" /></div>
      <div className="bg-card border border-ink/10 px-3 py-2 rounded-2xl rounded-bl-sm max-w-[75%] text-sm">
        <div className="text-[10px] font-mono uppercase tracking-wider text-lime mb-0.5">AI · Helix</div>
        {msg.text}
      </div>
    </div>
  );
};
