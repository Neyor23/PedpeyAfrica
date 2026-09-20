import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-[70vh] px-5 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: September 20, 2026</p>

      <div className="space-y-8 leading-7 text-[15px]">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-muted-foreground">At PedPey Africa, we value your privacy. This policy explains what information we collect, how we use it, and your rights.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="text-muted-foreground">We collect information you provide directly such as your email when you sign up, and usage data like pages visited to improve our service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="text-muted-foreground">We use your information to provide and improve PedPey, to communicate with you, to secure our platform, and to comply with legal obligations.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Data Storage & Security</h2>
          <p className="text-muted-foreground">Your data is securely stored using Supabase with encryption. We take reasonable measures to protect it, but no method is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
          <p className="text-muted-foreground">You have the right to access, correct, or delete your data. Contact us at hello@pedpeyaafrica.com to exercise these rights.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
          <p className="text-muted-foreground">If you have questions about this Privacy Policy, email samsonchristian2000@gmail.com</p>
        </section>
      </div>
    </div>
  );
}