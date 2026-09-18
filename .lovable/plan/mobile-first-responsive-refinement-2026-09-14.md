# Mobile-first responsive refinement

## What will change
- Rework the header so tablet and phone widths use a smooth, accessible menu panel while the logo and theme control remain visible; keep the full horizontal navigation on desktop.
- Refine the opening section for smaller screens with controlled headline sizing, a full-width search field, and a contained Africa map whose markers have larger tap targets.
- Make question, topic, community, article, and footer layouts start as single columns and progressively expand at tablet and desktop widths.
- Give mobile forms full-width controls and buttons with comfortable spacing and touch targets of at least 44px.
- Normalize section spacing and responsive typography so phones feel open without making laptops overly tall.

## Technical details
- Update the existing React page and Tailwind v4 utilities only; no content, account behavior, or storage changes.
- Use `md` for the compact navigation and `lg` for the desktop header, with proper expanded-state labels and menu close behavior.
- Add overflow containment, minimum-width safeguards, responsive image sizing, and mobile-first grid classes.
- Verify at phone, tablet, and desktop widths for horizontal overflow, menu behavior, form sizing, map visibility, and article/footer flow.
