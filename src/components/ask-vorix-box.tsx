import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Sparkles } from "lucide-react";
import { EXAMPLE_QUERIES } from "@/lib/vorix-ai";

interface Props {
  value?: string;
  onSubmit: (query: string) => void;
  autoFocus?: boolean;
  compact?: boolean;
}

export function AskVorixBox({ value = "", onSubmit, autoFocus, compact }: Props) {
  const [query, setQuery] = useState(value);
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => setQuery(value), [value]);

  useEffect(() => {
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) return;
    setVoiceSupported(true);
    const rec = new SR();
    rec.lang = "en-NG";
    rec.interimResults = false;
    rec.onresult = (e: any) => {
      const text = e.results[0][0].transcript as string;
      setQuery(text);
      setListening(false);
      onSubmit(text);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    return () => rec.abort?.();
  }, [onSubmit]);

  const toggleVoice = () => {
    const rec = recognitionRef.current;
    if (!rec) return;
    if (listening) {
      rec.stop();
      setListening(false);
    } else {
      setListening(true);
      rec.start();
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSubmit(query.trim());
        }}
        className="rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-elevated)]"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-3 px-2">
            <Sparkles className="size-5 shrink-0 text-accent" />
            <label htmlFor="ask-vorix" className="sr-only">
              Describe the home you need
            </label>
            <input
              id="ask-vorix"
              autoFocus={autoFocus}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find verified student housing in Yaba under ₦500,000"
              className="w-full bg-transparent py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none sm:text-base"
            />
          </div>
          <div className="flex items-center gap-2">
            {voiceSupported && (
              <button
                type="button"
                onClick={toggleVoice}
                aria-label={listening ? "Stop voice search" : "Search with your voice"}
                className={`inline-flex size-11 items-center justify-center rounded-xl border transition-colors ${
                  listening
                    ? "border-accent bg-accent text-accent-foreground animate-pulse-dot"
                    : "border-border text-foreground/70 hover:bg-muted"
                }`}
              >
                {listening ? <MicOff className="size-5" /> : <Mic className="size-5" />}
              </button>
            )}
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:flex-none"
            >
              Ask VORIX
            </button>
          </div>
        </div>
      </form>

      {!compact && (
        <div className="mt-4 flex flex-wrap gap-2">
          {EXAMPLE_QUERIES.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => {
                setQuery(q);
                onSubmit(q);
              }}
              className="rounded-full border border-border bg-background/70 px-3.5 py-2 text-xs font-medium text-foreground/75 transition-colors hover:border-primary hover:text-primary"
            >
              {q}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
