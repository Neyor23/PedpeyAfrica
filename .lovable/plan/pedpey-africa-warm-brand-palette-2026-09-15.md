# PedPey Africa warm brand palette

## Scope
- Replace the existing green primary palette with espresso/chocolate brown in both light and dark themes.
- Use vibrant golden-yellow/amber for accents, highlights, active states, markers, and supporting emphasis.
- Retune green/teal-tinted surfaces, borders, footer, community band, and supporting neutrals into warm brand-compatible tones.
- Update the Africa map gradient from green to a readable amber-to-espresso treatment, preserving accessible markers and labels.
- Update the favicon’s green fill to the new espresso brand color.

## Technical details
- Keep all page styling tied to semantic tokens in `src/styles.css`; existing component classes will inherit the palette consistently.
- Preserve contrast by using light text on espresso surfaces and dark espresso text on amber controls.
- Validate light and dark modes at mobile and desktop sizes, including buttons, focus rings, community panels, and map states.
