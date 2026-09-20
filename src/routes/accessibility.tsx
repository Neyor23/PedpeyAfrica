import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
  component: Accessibility,
});

function Accessibility() {
  return (
    <div className="min-h-[70vh] px-5 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Accessibility Statement</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: September 20, 2026</p>

      <div className="space-y-8 leading-7 text-[15px]">
        <section>
          <h2 className="text-xl font-semibold mb-3">Our Commitment</h2>
          <p className="text-muted-foreground">PedPey Africa is committed to making our platform accessible to everyone, including people with disabilities.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Standards</h2>
          <p className="text-muted-foreground">We aim to meet WCAG 2.1 Level AA standards. We use semantic HTML, keyboard navigation, and sufficient color contrast.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Ongoing Improvements</h2>
          <p className="text-muted-foreground">We continuously audit our site and improve accessibility. If you encounter any barrier, please let us know.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Feedback</h2>
          <p className="text-muted-foreground">We welcome feedback on accessibility. Contact us at hello@pedpeyaafrica.com and we will respond within 48 hours.</p>
        </section>
      </div>
    </div>
  );
}