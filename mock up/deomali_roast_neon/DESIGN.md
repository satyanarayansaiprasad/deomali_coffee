# Design System Document: The Sensory Roast

## 1. Overview & Creative North Star: "Organic Brutalism"
This design system is built to bridge the gap between the raw, tactile nature of coffee roasting and the high-fidelity digital aesthetic of Gen Z lifestyle culture. Our Creative North Star is **Organic Brutalism**: a philosophy that pairs heavy, unapologetic typography and bold structural blocks with the soft, fluid textures of steam, cream, and glass.

To move beyond the "template" look, we reject the rigid grid in favor of **intentional asymmetry**. Layouts should feel like a high-end editorial spread—think overlapping elements, oversized display type that "breaks" container boundaries, and a sophisticated use of negative space that allows high-quality photography to breathe. This isn't just an interface; it's a digital gallery for the coffee enthusiast.

---

## 2. Colors & Tonal Depth
Our palette transitions from the deep, grounded tones of the bean to the electric energy of the modern café.

### The Color Logic
*   **Primary (#100403) & Primary Container (#2C1B18):** These are our "Espresso" anchors. Use them for high-impact backgrounds and deep structural elements.
*   **Secondary (#AB3600) & Secondary Container (#FE5E1E):** Our "Neon Pulse." Use sparingly for CTAs and moments of delight.
*   **Tertiary (#000A00) & Forest Accents:** Used to ground the vibrancy and provide a premium, organic counter-balance.
*   **Surface Tiers:** Use `surface-container-low` (#F5F5DC) as the standard page background to evoke premium cardstock.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a featured product card (`surface-container-highest`) sits directly on the `surface` background. The shift in tone provides the boundary, not a stroke.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of "Frosted Glass" and "Fine Paper."
1.  **Base:** `surface` (#FBFBE2)
2.  **Sectioning:** `surface-container-low` (#F5F5DC)
3.  **Interactive Elements:** `surface-container-high` (#EAEA1D)
4.  **Floating Elements:** Use `surface-variant` with a **Backdrop Blur (12px - 20px)** to create a Glassmorphism effect that allows coffee photography to bleed through the UI.

---

## 3. Typography: The Editorial Voice
We utilize a high-contrast pairing to balance authority with utility.

*   **Display & Headlines (Space Grotesk):** This is our "Bold Grotesque." It should be used at scale. `display-lg` (3.5rem) is the hero of the page. Don't be afraid to use tight letter-spacing (-0.02em) for a more compressed, premium feel.
*   **Body & Labels (Manrope):** A clean, geometric sans-serif that ensures legibility during the mobile ordering experience.
*   **The Hierarchy Rule:** Headlines should feel "heavy." If a headline and body text sit together, the headline should be at least 2.5x the size of the body to maintain the editorial "brutalist" impact.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often too "digital." We use **Ambient Depth**.

*   **The Layering Principle:** Achieve lift by stacking surface tiers. A `surface-container-lowest` card placed on a `surface-container-high` background creates a natural, recessed "pressed" effect without a single shadow.
*   **Ambient Shadows:** For floating action buttons or modal overlays, use a shadow color tinted with our espresso tone (`primary-container`). 
    *   *Shadow Spec:* `0px 20px 40px rgba(44, 27, 24, 0.08)`. This creates a soft, organic lift rather than a harsh drop shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a container definition, use `outline-variant` at **15% opacity**. It should be felt, not seen.
*   **Signature Texture:** Apply a subtle 5% grain overlay to all `primary-container` surfaces to mimic the tactile feel of kraft paper or roasted beans.

---

## 5. Components

### Buttons
*   **Primary:** `secondary-container` (#FE5E1E) background with `on-secondary-fixed` (#390C00) text. Shape: `rounded-full`. No border.
*   **Tertiary (Editorial):** All caps `label-md` with a 2px underline in `secondary`. No background. High-order elegance.

### Input Fields
*   **Style:** Minimalist underline or subtle tonal box (`surface-container-highest`). 
*   **States:** On focus, the label should shift to `secondary` (#AB3600) and the underline should expand from the center.

### Cards & Lists
*   **The Divider Ban:** Never use lines to separate list items. Use `spacing-6` (2rem) of vertical white space or alternating tonal shifts between `surface-container-low` and `surface-container-highest`.
*   **Coffee Cards:** Use `rounded-xl` (1.5rem) corners. Imagery should be the hero, with typography overlapping the image in a glassmorphic tag.

### Special Component: The "Roast Slider"
A custom selection component using a gradient from `surface-container-lowest` to `primary-container` to visually represent the roast profile of the beans.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use "Overlapping Content." Let a coffee bag image bleed off the edge of the screen or overlap a headline.
*   **DO** use Glassmorphism for navigation bars. Use `surface` at 80% opacity with a 15px backdrop blur.
*   **DO** embrace the "Neon Orange" for micro-interactions (e.g., heart icons, cart counts, or loading states).

### Don't
*   **DON'T** use pure black (#000000). Always use our Espresso `primary` (#100403) for deep blacks to keep the palette warm and organic.
*   **DON'T** use 1px borders. If you feel the need for a border, increase the contrast between your surface layers instead.
*   **DON'T** use standard easing. Use a "Custom Spring" (0.4, 0.1, 0.3, 1.5) for all transitions to give the UI a tactile, bouncy, Gen Z-friendly energy.

---

**Director’s Note:** Remember, this design system isn't just a kit of parts; it's a mood. Every pixel should feel as though it was hand-poured. If a screen feels too "clean" or "safe," add an abstract shape or increase the font size of a headline until it feels slightly uncomfortable. That's where the premium edge lives.