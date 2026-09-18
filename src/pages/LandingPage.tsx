export default function LandingPage({ onJoin, onSearch }: { onJoin: () => void; onSearch: (t: string) => void }) {
    const BROWN = "#8B5E3C";
  
    return (
      <div className="min-h-screen bg-[#1A0A0A] text-white">
        {/* NAV - LOGO HERE - SAME AS MAIN PAGE */}
        <nav className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1200px] mx-auto border-b border-white/10">
          <img
            src="/images/logo-light.png"
            alt="Pedpey Africa"
            className="h-11 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 18px rgba(255, 193, 7, 0.8))' }}
          />
          <button onClick={onJoin} className="bg-white text-black px-7 py-2.5 rounded-full text-sm font-black">
            Join Community
          </button>
        </nav>
  
        {/* HERO - LIKE YOUR SCREENSHOT */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-20 pb-10">
          <p className="text-[#FFC107] text-[12px] font-black tracking-[0.2em] flex items-center gap-3">
            <span className="w-10 h-[3px] bg-[#FFC107]"></span>
            THE PAN AFRICA TECHNICAL ELECTRONIC MECHANISM
          </p>
          <h1 className="text-[44px] md:text-[76px] font-black leading-[0.9] tracking-tighter mt-8">
            Exploring the<br/>
            technical<br/>
            development<br/>
            mechanism of<br/>
            <span className="text-[#FFC107]">learning Africa</span><br/>
            governance
          </h1>
          <p className="text-[17px] font-semibold leading-relaxed mt-8 max-w-xl text-white/60">
            A Pan-African knowledge platform where African ideas, technology and civic participation advance the continent we want.
          </p>
          <div className="mt-10 flex gap-4">
            <button onClick={onJoin} className="bg-[#FFC107] text-black px-8 py-4 rounded-full text-[15px] font-black">Join the Community</button>
            <button onClick={()=>onSearch("governance")} className="border border-white/20 px-8 py-4 rounded-full text-[15px] font-black">Explore →</button>
          </div>
        </section>
  
        {/* WHAT WE STAND FOR */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 border-t border-white/5 mt-10">
          <h2 className="text-center text-[12px] font-black tracking-[0.3em] text-white/40 mb-14">WHAT WE STAND FOR</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#251313] border border-white/10 rounded-[20px] p-8"><h3 className="font-black text-[18px]">Pan Africanism & SDGs</h3><p className="text-[14px] text-white/50 mt-3 font-medium">Exploring Pan-Africanism as vehicle for Agenda 2063.</p></div>
            <div className="bg-[#251313] border border-white/10 rounded-[20px] p-8"><h3 className="font-black text-[18px]">Africans in Diaspora</h3><p className="text-[14px] text-white/50 mt-3 font-medium">Connecting diaspora knowledge back home.</p></div>
            <div className="bg-[#251313] border border-white/10 rounded-[20px] p-8"><h3 className="font-black text-[18px]">The Africa We Want</h3><p className="text-[14px] text-white/50 mt-3 font-medium">Prosperous, integrated and self-determined.</p></div>
          </div>
        </section>
  
        <section className="text-center py-20 border-t border-white/5">
          <h2 className="font-black text-4xl">Ready to be part of the movement?</h2>
          <button onClick={onJoin} className="mt-8 bg-white text-black px-10 py-4 rounded-full font-black">Create Account — Free</button>
        </section>
      </div>
    );
  }