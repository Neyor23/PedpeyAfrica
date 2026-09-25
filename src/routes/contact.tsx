import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-[70vh] px-5 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-sm text-muted-foreground mb-10">We'd love to hear from you. We reply within 24 hours.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Email</h3>
            <a href="mailto:pedpeyafrica@gmail.com" className="text-muted-foreground hover:text-[#FF6B4A] underline">
            pedpeyafrica@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-muted-foreground">Abuja</p>
          </div>
          <div>
            <h3 className="font-semibold">Support Hours</h3>
            <p className="text-muted-foreground">Monday - Friday, 7am - 5pm WAT</p>
          </div>

          {/* NEW SOCIALS - CLICKABLE */}
          <div>
            <h3 className="font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/pedpeyafrica?stkn=MTNpejVyOHcxbnM4ZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[#FF6B4A] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@pedpeyafrica?_r=1&_t=ZS-99ugWBQvhWj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[#FF6B4A] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.72a4.85 4.85 0 0 1-1-.05z"/></svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" className="w-full border rounded-lg px-4 py-3" />
          <input placeholder="Your email" className="w-full border rounded-lg px-4 py-3" />
          <textarea placeholder="Message" rows={5} className="w-full border rounded-lg px-4 py-3"></textarea>
          <button className="w-full bg-[#FF6B4A] text-white rounded-lg py-3 font-semibold">Send Message</button>
        </form>
      </div>
    </div>
  );
}