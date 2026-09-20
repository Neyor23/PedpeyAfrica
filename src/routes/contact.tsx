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
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-muted-foreground">samsonchristian2000@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-muted-foreground">Abuja</p>
          </div>
          <div>
            <h3 className="font-semibold">Support Hours</h3>
            <p className="text-muted-foreground">Monday - Friday, 7am - 5pm WAT</p>
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