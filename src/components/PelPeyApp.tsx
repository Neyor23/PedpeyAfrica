import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Globe2,
  Leaf,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Send,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {Eye, EyeOff} from "lucide-react";
import { signIn, signUp, signInWithGoogle } from "../lib/auth";
import { useNavigate } from "@tanstack/react-router";
import { articlesData } from "@/data/articlesData";
import { supabase } from "../lib/supabase";
 [];

const questions = [
  {
    number: "01",
    title: "Importance of Development Programs",
    text: "Explore why locally led programs are essential to equitable and lasting growth.",
  },
  {
    number: "02",
    title: "How Pan Africanism Sustains Development",
    text: "See how shared purpose turns regional knowledge into collective progress.",
  },
  {
    number: "03",
    title: "Roles of Pan-Africans",
    text: "Discover the contributions citizens, communities and the diaspora can make.",
  },
];

const topics = [
  {
    icon: Globe2,
    label: "Pan Africanism",
    detail: "Sustainable Development Goals",
    number: "01",
  },
  {
    icon: Users,
    label: "Africans in Diaspora",
    detail: "Entrepreneurship & exchange",
    number: "02",
  },
  {
    icon: Leaf,
    label: "The Africa We Want",
    detail: "Agenda 2063 in action",
    number: "03",
  },
];

const articles = [
  {
    title: "How PedPey Africa Has Impacted Africa Through Its AI Creativity",
    category: "Artificial intelligence",
    image: "/images/article-ai-creativity.jpg",
    imageAlt: "A collection of traditional African masks representing cultural creativity",
    width: 940,
    height: 627,
  },
  {
    title:
      "How Is Water Sustainability Efficient And Its Impact To Artificial Intelligence Facilitating Agenda 2063",
    category: "Water & resilience",
    image: "/images/article-water-sustainability.jpg",
    imageAlt: "An aerial view of waterways, roads, and forest in an African landscape",
    width: 940,
    height: 627,
  },
  {
    title: "New Non-Kinetic Approach Towards Sustainable Development Programs In Africa",
    category: "Development programs",
    image: "/images/article-sustainable-development.jpg",
    imageAlt: "Two professionals inspecting a large solar energy installation",
    width: 940,
    height: 627,
  },
  {
    title: "What Is The Importance of Youth Community Engagements In Africa",
    category: "Youth leadership",
    image: "/images/article-youth-engagement.jpg",
    imageAlt: "A young African professional working on a laptop",
    width: 940,
    height: 627,
  },
  {
    title:
      "From Localized Learning To DigitalizedLearning Through The Availability Of PedPeyAfrica AI And Development",
    category: "Digital learning",
    image: "/images/article-digital-learning.jpg",
    imageAlt: "Two African students learning together on a laptop",
    width: 940,
    height: 627,
  },
  {
    title: "Benefits of Strategic Partnership with PedPey Africa",
    category: "Partnerships",
    image: "/images/pedpey-building-youth-minds.jpg",
    imageAlt: "Official PedPey Africa Building Youth Minds programme poster",
    width: 768,
    height: 960,
    poster: true,
  },
];

const markers = [
  { name: "West Africa", topic: "Youth innovation", x: 79, y: 112 },
  { name: "East Africa", topic: "Digital public services", x: 145, y: 123 },
  { name: "Southern Africa", topic: "Climate resilience", x: 126, y: 190 },
  { name: "North Africa", topic: "Knowledge exchange", x: 112, y: 55 },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center" aria-label="PedPey Africa home">
      {/* Light Mode Logo */}
      <img
        src="/images/logo-light.png"
        alt="PedPey Africa"
        className="h-10 w-auto object-contain dark:hidden"
      />

      {/* Dark Mode Logo */}
      <img
        src="/images/logo-dark.png"
        alt="PedPey Africa"
        className="h-10 w-auto object-contain hidden dark:block"
      />
    </a>
  );
}

function AfricaMap() {
  const [active, setActive] = useState<(typeof markers)[number]>(markers[1] ?? markers[0] ?? { name: "Africa", topic: "Shared development", x: 120, y: 120 });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden sm:max-w-[480px] lg:max-w-[520px]" aria-label="Interactive map of Africa">
      <div className="map-orbit map-orbit-one" />
      <div className="map-orbit map-orbit-two" />
      <svg viewBox="0 0 240 260" className="relative z-10 block h-full w-full" role="img">
        <title>Africa development network map</title>
        <defs>
          <linearGradient id="africa-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--map-start)" />
            <stop offset="1" stopColor="var(--map-end)" />
          </linearGradient>
          <pattern id="map-pattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 6h12M6 0v12" stroke="var(--map-grid)" strokeWidth=".5" />
          </pattern>
        </defs>
        <path
          className="africa-shape"
          d="M56 29 91 12l45 4 18 17 30 7 14 27-12 33-22 20-10 43-22 37-12 43-18 4-11-31-18-27-9-39-24-30-11-32 14-23-2-26Z"
          fill="url(#africa-fill)"
        />
        <path
          d="M56 29 91 12l45 4 18 17 30 7 14 27-12 33-22 20-10 43-22 37-12 43-18 4-11-31-18-27-9-39-24-30-11-32 14-23-2-26Z"
          fill="url(#map-pattern)"
        />
        <path d="M64 105 145 123M112 55l14 135M79 112l47 78" className="map-line" />
        {markers.map((marker) => (
          <g
            key={marker.name}
            role="button"
            tabIndex={0}
            aria-label={`${marker.name}: ${marker.topic}`}
            onMouseEnter={() => setActive(marker)}
            onFocus={() => setActive(marker)}
            onClick={() => setActive(marker)}
            onKeyDown={(event) => event.key === "Enter" && setActive(marker)}
            className="map-marker cursor-pointer outline-none"
          >
            <circle cx={marker.x} cy={marker.y} r="17" className="marker-hit-area" />
            <circle cx={marker.x} cy={marker.y} r="12" className="marker-pulse" />
            <circle cx={marker.x} cy={marker.y} r="6" className="marker-core" />
          </g>
        ))}
      </svg>
      <div className="map-caption" aria-live="polite">
        <span className="map-caption-dot" />
        <span>
          <strong>{active.name}</strong>
          {active.topic}
        </span>
      </div>
    </div>
  );
}

function Modal({
  mode,
  onClose,
}: {
  mode: "signin" | "signup" | "article";
  onClose: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [onClose]);

  const isArticle = mode === "article";
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-overlay p-4" onMouseDown={onClose}>
      <div
        className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-2xl animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{isArticle ? "PedPey library" : "Member access"}</p>
            <h2 id="modal-title" className="mt-2 font-display text-2xl font-bold text-card-foreground">
              {isArticle ? "Article preview" : mode === "signin" ? "Welcome back" : "Join the community"}
            </h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>
        {isArticle ? (
<div className="mt-5">
  <p className="mt-5 leading-7 text-muted-foreground">
    Your article is ready. Opening full reading experience...
  </p>
  <button
    className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
    onClick={() => {
      onClose();
      // go to real article page
      const id = (window as any).__selectedArticleId || 1;
      window.location.href = `/article/${id}`;
    }}
  >
    Continue to full article →
  </button>
</div>
) : (
          <form
  className="mt-6 space-y-4"
  onSubmit={async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const fullName = mode === "signup" 
      ? (form.elements.namedItem("fullName") as HTMLInputElement)?.value 
      : "";

    if (mode === "signup") {
      const { error } = await signUp(email, password, fullName);
      if (error) {
        alert(error.message);
      } else {
        alert("Account created successfully! Please check your email.");
        onClose();
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        alert(error.message);
      } else {
        alert("Signed in successfully!");
        onClose();
      }
    }
  }}
>
  {mode === "signup" && (
    <label className="field-label">
      Full name
      <input
        name="fullName"
        className="form-field"
        placeholder="Your name"
        required
      />
    </label>
  )}

  <label className="field-label">
    Email address
    <input
      name="email"
      type="email"
      className="form-field"
      placeholder="you@example.com"
      required
    />
  </label>

  <label className="field-label">
  Password
  <div className="relative">
    <input
      name="password"
      type={showPassword ? "text" : "password"}
      className="form-field pr-10"
      placeholder="........"
      required
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    >
      {showPassword ? "🙈" : "👁️"}
    </button>
  </div>
  </label>

  <button className="primary-button w-full" type="submit">
    {mode === "signin" ? "Sign in" : "Create account"}
    <ArrowRight size={17} />
  </button>

  {/* Continue with Google */}
  <button
    type="button"
    onClick={async () => {
      const { error } = await signInWithGoogle();
      if (error) alert(error.message);
    }}
    className="w-full mt-3 flex items-center justify-center gap-2 border border-border rounded-lg py-2.5 text-sm font-medium hover:bg-muted transition"
  >
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
    Continue with Google
  </button>
</form>
        )}
      </div>
    </div>
  );
}

export function PedPeyApp() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<"signin" | "signup" | "article" | null>(null);
  const [query, setQuery] = useState("");
  const [lesson, setLesson] = useState("");
  const [lessonSent, setLessonSent] = useState(false);
  const [communityQuestion, setCommunityQuestion] = useState("");
  const [postedQuestion, setPostedQuestion] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState<any>(null);

useEffect(() => {
  // 1. Check if already logged in
  supabase.auth.getSession().then(({ data: { session } }) => {
    setUser(session?.user ?? null);
  });

  // 2. Listen for login/logout
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user ?? null);
  });

  return () => subscription.unsubscribe();
}, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("pedpey-theme") ?? window.localStorage.getItem("pelpey-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("pedpey-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeMenu);
    return () => document.removeEventListener("keydown", closeMenu);
  }, [menuOpen]);

  const filteredArticles = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return articles;
    return articles.filter(
      (article) => article.title.toLowerCase().includes(term) || article.category.toLowerCase().includes(term),
    );
  }, [query]);

  const submitLesson = (event: FormEvent) => {
    event.preventDefault();
    if (!lesson.trim()) return;
    setLessonSent(true);
    setLesson("");
  };

  const submitQuestion = (event: FormEvent) => {
    event.preventDefault();
    if (!communityQuestion.trim()) return;
    setPostedQuestion(communityQuestion.trim());
    setCommunityQuestion("");
  };

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="page-shell grid h-18 grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 lg:h-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
          <div className="min-w-0"><Brand /></div>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#explore">Explore</a>
            <a className="nav-link" href="#community">Community</a>
            <a className="nav-link" href="#articles">Articles</a>
            <a className="nav-link" href="#about">About</a>
          </nav>
          <div className="hidden items-center justify-end gap-2 lg:flex">
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {user ? (
  <div className="flex items-center gap-3">
    <span className="text-sm font-medium">{user.email}</span>
    <button 
      onClick={async () => { await supabase.auth.signOut(); setUser(null); }}
      className="rounded-full border px-4 py-1.5 text-sm"
    >
      Logout
    </button>
  </div>
) : (
  <div className="flex items-center gap-2">
    <button onClick={() => setModal("signin")} className="rounded-full px-4 py-1.5 text-sm">Sign in</button>
    <button onClick={() => setModal("signup")} className="rounded-full bg-black text-white px-4 py-1.5 text-sm dark:bg-white dark:text-black">Sign up</button>
  </div>
)}
          </div>
          <button className="icon-button lg:hidden" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`mobile-menu lg:hidden ${menuOpen ? "mobile-menu-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="page-shell py-4">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {[["Explore", "#explore"], ["Community", "#community"], ["Articles", "#articles"], ["About", "#about"]].map(([label, href]) => (
                <a key={label} href={href} className="mobile-nav-link" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>{label}</a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-4">
                <button className="text-button border border-border" onClick={() => { setModal("signin"); setMenuOpen(false); }} tabIndex={menuOpen ? 0 : -1}>Sign in</button>
                <button className="primary-button" onClick={() => { setModal("signup"); setMenuOpen(false); }} tabIndex={menuOpen ? 0 : -1}>Sign up <ArrowRight size={16} /></button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-pattern relative pt-18 lg:pt-20">
          <div className="page-shell grid items-center gap-6 py-12 sm:gap-10 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.08fr_.92fr] lg:py-20">
            <div className="relative z-20 min-w-0 animate-fade-in">
              <p className="eyebrow"><span className="eyebrow-line" /> The Pan Africa Technical Electronic Mechanism</p>
              <h1 className="mt-5 max-w-3xl break-words font-display text-[clamp(2.25rem,11vw,3.5rem)] font-bold leading-[1.02] text-balance sm:mt-7 sm:text-6xl sm:leading-[.98] lg:text-[5.15rem]">
                Exploring the technical <span className="text-primary">development</span> mechanism of learning Africa governance.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
                A shared knowledge platform where African ideas, technology and civic participation advance the continent we want.
              </p>
              <div className="mt-7 w-full max-w-2xl sm:mt-9">
                <label className="search-box">
                  <Search size={21} aria-hidden="true" />
                  <span className="sr-only">Search PedPey Africa</span>
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="What would you like to understand?"
                  />
                  <a href="#articles" className="search-action" aria-label="Search articles"><ArrowRight size={20} /></a>
                </label>
                <p className="mt-3 text-xs font-medium text-muted-foreground">Try “water”, “AI”, “youth” or “partnerships”</p>
              </div>
            </div>
            <div className="relative z-10 min-w-0 animate-fade-in [animation-delay:150ms]">
              <AfricaMap />
            </div>
          </div>
          <div className="page-shell relative z-20 grid gap-4 pb-14 md:grid-cols-3 lg:-mb-20 lg:pb-0">
            {questions.map((question) => (
              <a href="#articles" className="question-card group" key={question.number}>
                <span className="text-xs font-bold text-primary">{question.number}</span>
                <h2 className="mt-8 font-display text-xl font-bold leading-tight">{question.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{question.text}</p>
                <ChevronRight className="mt-5 transition-transform group-hover:translate-x-1" size={19} />
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-18 bg-secondary py-14 sm:py-20 lg:pb-24 lg:pt-40">
          <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.18fr_.82fr] lg:gap-12">
            <div className="image-frame">
              <img src={"/images/heritage-sculpture.jpg"} alt="An African heritage sculpture holding a vessel overhead" width={940} height={627} loading="lazy" />
              <div className="image-stat"><strong>54</strong><span>nations, one shared future</span></div>
            </div>
            <div>
              <p className="eyebrow">Intelligence rooted in place</p>
              <h2 className="section-title mt-5">African wisdom.<br /><span className="text-primary">Future-facing tools.</span></h2>
               <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                PedPey Africa connects policy, technology and lived experience. We turn complex development conversations into useful knowledge for citizens, builders and decision-makers.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-7 min-[420px]:grid-cols-2 sm:gap-8">
                <div><strong className="font-display text-3xl">2063</strong><p className="mt-1 text-sm text-muted-foreground">The horizon guiding our work</p></div>
                <div><strong className="font-display text-3xl">One Africa</strong><p className="mt-1 text-sm text-muted-foreground">Connected through shared learning</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="explore" className="scroll-mt-18 py-14 sm:py-20">
          <div className="page-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow">Knowledge pathways</p><h2 className="section-title mt-4">Explore by topics</h2></div>
              <p className="max-w-md leading-7 text-muted-foreground">Follow the ideas shaping cooperation, opportunity and sustainable progress across Africa.</p>
            </div>
            <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <a href="#articles" className="topic-card group" key={topic.label}>
                  <div className="flex items-start justify-between"><topic.icon size={28} /><span className="text-xs font-bold text-muted-foreground">{topic.number}</span></div>
                  <div className="mt-24"><p className="text-sm font-semibold text-primary">{topic.detail}</p><h3 className="mt-2 font-display text-2xl font-bold">{topic.label}</h3></div>
                  <ArrowRight className="mt-6 transition-transform group-hover:translate-x-2" size={21} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="community-band scroll-mt-18 py-14 sm:py-20">
          <div className="page-shell">
            <div className="max-w-3xl"><p className="eyebrow text-accent">Knowledge grows when it is shared</p><h2 className="section-title mt-4 text-community-foreground">Build the lesson capital of Africa.</h2></div>
            <div className="mt-9 grid gap-5 sm:mt-12 lg:grid-cols-2">
              <article className="community-panel">
                <div className="panel-icon"><BookOpen size={22} /></div>
                <p className="mt-7 text-xs font-bold uppercase text-accent">Lesson Capital</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-community-foreground">Share what your community has learned.</h3>
                <p className="mt-3 leading-7 text-community-muted">Add a practical lesson from a project, policy or local initiative. Your experience could unlock progress elsewhere.</p>
                {lessonSent ? (
                  <div className="success-message"><Check size={20} /><span><strong>Lesson received.</strong> Thank you for contributing to Africa’s shared knowledge.</span></div>
                ) : (
                  <form className="mt-6" onSubmit={submitLesson}>
                    <textarea className="community-field" value={lesson} onChange={(event) => setLesson(event.target.value)} placeholder="What worked, what changed, and what should others know?" aria-label="Share a community lesson" />
                    <button className="accent-button mt-3 w-full sm:w-auto" type="submit">Contribute a lesson <Send size={16} /></button>
                  </form>
                )}
              </article>
              <article className="community-panel">
                <div className="panel-icon"><CircleHelp size={22} /></div>
                <p className="mt-7 text-xs font-bold uppercase text-accent">Question and Answers</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-community-foreground">Ask the Pan-African community.</h3>
                <p className="mt-3 leading-7 text-community-muted">Bring a challenge or an idea. Frame a question that researchers, practitioners and citizens can explore together.</p>
                {postedQuestion && <div className="posted-question"><MessageCircle size={17} /><span>{postedQuestion}</span></div>}
                <form className="mt-6" onSubmit={submitQuestion}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-2"><input className="community-input" value={communityQuestion} onChange={(event) => setCommunityQuestion(event.target.value)} placeholder="Ask a development question…" aria-label="Ask a question" /><button className="accent-icon-button w-full sm:w-[3.25rem]" type="submit" aria-label="Post question"><Send size={18} /><span className="sm:sr-only">Post question</span></button></div>
                </form>
              </article>
            </div>
          </div>
        </section>

        <section id="articles" className="scroll-mt-18 py-14 sm:py-20">
          <div className="page-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow">Ideas for the continent</p><h2 className="section-title mt-4">Latest insights</h2></div>
              {query && <p className="text-sm text-muted-foreground">{filteredArticles.length} result{filteredArticles.length === 1 ? "" : "s"} for “{query}”</p>}
            </div>
            {filteredArticles.length ? (
              <div className="mt-9 grid min-w-0 grid-cols-1 gap-x-5 gap-y-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
                {filteredArticles.map((article, index) => (
                   <div key={article.title} onClick={() => { window.location.href = "/article/" + String((articlesData as any).find((x:any) => x.title?.trim() === article.title?.trim)?.id || index + 1)}} className="article-card group min-w-0 text-left cursor-pointer" style={{pointerEvents: 'auto', position: 'relative', zIndex: 10}}>
                    <div className={`article-image${article.poster ? " article-image-poster" : ""}`}><img src={article.image} alt={article.imageAlt} width={article.width} height={article.height} loading="lazy" /></div>
                    <p className="mt-5 text-xs font-bold uppercase text-primary">{article.category}</p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug">{article.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Read insight <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state"><Search size={26} /><h3>No matching insight yet</h3><p>Try a broader term such as AI, youth, water or Africa.</p><button className="text-button" onClick={() => setQuery("")}>Clear search</button></div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-footer-border bg-footer text-footer-foreground">
        <div className="page-shell py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
            <div><Brand /><p className="mt-5 max-w-sm leading-7 text-footer-muted">PedPeyAfrica, A Pan African creative knowledge building and development platform Teaching advanced governance mechanisms, sustainable development, policy, structures, reform and legal civic conversations.</p><p className="mt-8 text-sm text-footer-muted">Built for Africa. Open to the world.</p></div>
            <div><p className="footer-title">Quick links</p><div className="footer-links"><a href="#top">Home</a><a href="#about">About</a><a href="#community">Community</a><a href="#articles">Articles</a></div></div>
            <div><p className="footer-title">Explore</p><div className="footer-links"><a href="#explore">Pan Africanism</a><a href="#explore">The Diaspora</a><a href="#explore">Agenda 2063</a><a href="#articles">AI & Development</a></div></div>
            <div><p className="footer-title">Legal</p><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms of use</a><a href="/accessibility">Accessibility</a><a href="/contact">Contact</a></div></div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-footer-border pt-7 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between"><span>© 2026 PedPey Africa. All rights reserved.</span><span>Knowledge · Community · Progress</span></div>
        </div>
      </footer>
      {modal && <Modal mode={modal} onClose={() => setModal(null)} />}
    </div>
  );
}