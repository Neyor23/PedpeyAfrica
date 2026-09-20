import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-[70vh] px-5 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: September 20, 2026</p>

      <div className="space-y-8 leading-7 text-[15px]">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">By accessing PedPey Africa, you agree to these Terms. If you do not agree, please do not use the platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Our Services</h2>
          <p className="text-muted-foreground">PedPey Africa provides digital services and content. We may update or discontinue features at any time without prior notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
          <p className="text-muted-foreground">You agree not to misuse the platform, attempt to hack, upload harmful content, or violate any applicable laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
          <p className="text-muted-foreground">All content, logos, and branding on PedPey Africa are owned by us. You may not copy or reproduce them without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p className="text-muted-foreground">PedPey is provided on an "as is" basis. We are not liable for any indirect damages arising from your use of the service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Changes to Terms</h2>
          <p className="text-muted-foreground">We may update these Terms. Continued use after changes means you accept the new Terms. Contact: hello@pedpeyaafrica.com</p>
        </section>
      </div>
    </div>
  );
}