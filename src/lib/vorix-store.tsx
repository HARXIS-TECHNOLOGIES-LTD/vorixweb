import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export interface ViewingRequest {
  id: string;
  propertyId: string;
  propertyName: string;
  name: string;
  phone: string;
  date: string;
  note: string;
  status: "Pending review" | "Confirmed";
  createdAt: string;
}

interface VorixState {
  saved: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
  requests: ViewingRequest[];
  addRequest: (r: Omit<ViewingRequest, "id" | "status" | "createdAt">) => void;
  searches: string[];
  addSearch: (q: string) => void;
  clearSearches: () => void;
  hydrated: boolean;
}

const KEY = "vorix-demo-state-v1";
const Ctx = createContext<VorixState | null>(null);

export function VorixProvider({ children }: { children: React.ReactNode }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [requests, setRequests] = useState<ViewingRequest[]>([]);
  const [searches, setSearches] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setSaved(Array.isArray(parsed.saved) ? parsed.saved : []);
        setRequests(Array.isArray(parsed.requests) ? parsed.requests : []);
        setSearches(Array.isArray(parsed.searches) ? parsed.searches : []);
      }
    } catch {
      /* ignore corrupt demo state */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify({ saved, requests, searches }));
    } catch {
      /* storage unavailable */
    }
  }, [saved, requests, searches, hydrated]);

  const toggleSaved = useCallback((id: string) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [id, ...prev]));
  }, []);

  const addRequest = useCallback((r: Omit<ViewingRequest, "id" | "status" | "createdAt">) => {
    setRequests((prev) => [
      {
        ...r,
        id: `vr-${Date.now()}`,
        status: "Pending review",
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  }, []);

  const addSearch = useCallback((q: string) => {
    const value = q.trim();
    if (!value) return;
    setSearches((prev) => [value, ...prev.filter((s) => s !== value)].slice(0, 8));
  }, []);

  const value = useMemo<VorixState>(
    () => ({
      saved,
      toggleSaved,
      isSaved: (id: string) => saved.includes(id),
      requests,
      addRequest,
      searches,
      addSearch,
      clearSearches: () => setSearches([]),
      hydrated,
    }),
    [saved, requests, searches, hydrated, toggleSaved, addRequest, addSearch],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useVorix() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useVorix must be used inside VorixProvider");
  return ctx;
}
