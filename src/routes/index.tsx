import { createFileRoute } from "@tanstack/react-router";
import { PedPeyApp } from "@/components/PelPeyApp";
import LandingPage from "@/pages/LandingPage";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(function(res) {
      if (res.data.session) setUser(res.data.session.user);
      setLoading(false);
    });
    const sub = supabase.auth.onAuthStateChange(function(_event, session) {
      if (session && session.user) {
        setUser(session.user);
        setShowAuth(false);
      } else {
        setUser(null);
      }
    });
    return function() {
      sub.data.subscription.unsubscribe();
    };
  }, []);

  const doAuth = async function() {
    try {
      if (isSignUp) {
        const result = await supabase.auth.signUp({ email: email, password: password });
        if (result.error) throw result.error;
        alert("Check your email to confirm account");
        setIsSignUp(false);
      } else {
        const result = await supabase.auth.signInWithPassword({ email: email, password: password });
        if (result.error) throw result.error;
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  const doGoogle = async function() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    });
    if (error) alert(error.message);
  };

  if (loading) {
    return <div className="min-h-screen bg-[#F8F6F0] flex items-center justify-center text-sm">Loading...</div>;
  }

  if (user) {
    return <PedPeyApp />;
  }

  return (
    <div>
      <LandingPage
        onJoin={function() { setShowAuth(true); }}
        onSearch={function(text: string) {
          setShowAuth(true);
        }}
      />

      {showAuth && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[24px] p-8 max-w-[380px] w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[22px] font-bold tracking-tight">{isSignUp? "Create account" : "Welcome back"}</h2>
              <button onClick={function() { setShowAuth(false); }} className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">✕</button>
            </div>

            {/* GOOGLE - BOTH SIGN IN AND SIGN UP */}
            <button onClick={doGoogle} className="w-full border border-black/10 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-black/5 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="google" />
              Continue with Google
            </button>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-[1px] bg-black/10"></div>
              <span className="text-[10px] tracking-widest opacity-40">OR</span>
              <div className="flex-1 h-[1px] bg-black/10"></div>
            </div>

            <input value={email} onChange={function(e) { setEmail(e.target.value); }} placeholder="Email" className="w-full border border-black/10 rounded-full px-5 py-3 text-sm outline-none focus:border-black/30 mb-3" />
            <input type="password" value={password} onChange={function(e) { setPassword(e.target.value); }} placeholder="Password" className="w-full border border-black/10 rounded-full px-5 py-3 text-sm outline-none focus:border-black/30 mb-5" />

            <button onClick={doAuth} className="w-full bg-[#121212] text-white py-3 rounded-full text-sm font-bold hover:bg-black">
              {isSignUp? "Create account" : "Sign in"}
            </button>

            <p className="text-center text-xs mt-5 opacity-60">
              <button onClick={function() { setIsSignUp(!isSignUp); }} className="underline">
                {isSignUp? "Already have an account? Sign in" : "No account? Create one"}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}