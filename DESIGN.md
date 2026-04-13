# Design System Document: The Kinetic Monolith

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Monolith"**
This design system moves beyond the utility of a simple counter and treats the interface as a high-end, tactile instrument. By marrying the raw power of "Organic Brutalism" with the precision of "Editorial Minimalism," we create an experience that feels weighted, intentional, and premium. 

To break the "template" look, we reject the standard symmetrical grid. Instead, we utilize **intentional asymmetry**—placing the counter value off-center or using dramatic whitespace—to create a sense of movement. Elements should feel like they are floating in a deep, pressurized void, using light and scale rather than lines to define their existence.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, atmospheric charcoal (`surface: #0b1326`), punctuated by hyper-vibrant functional accents.

### The Color Logic
- **Primary (`#4edea3`):** The Emerald Green. Reserved strictly for growth (Increment).
- **Secondary (`#ffb2b7`):** The Rose Red. Reserved for reduction (Decrement).
- **Tertiary (`#b7c8e1`):** The Slate Gray. A neutral ground for resets and utility.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. A `surface-container-low` section sitting on a `surface` background provides all the separation required. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (#0b1326)
- **Secondary Depth:** `surface-container-low` (#131b2e) for background grouping.
- **Interactive Elevated:** `surface-container-highest` (#2d3449) for cards that need to "pop."

### The "Glass & Gradient" Rule
To achieve professional polish, use **Glassmorphism** for floating controls. 
- Apply `background: rgba(45, 52, 73, 0.4)` with a `backdrop-blur-xl`.
- **Signature Textures:** For the main increment action, use a subtle linear gradient from `primary` (#4edea3) to `primary-container` (#10b981) at a 135-degree angle. This adds "soul" to the button, preventing it from looking like a flat digital block.

---

## 3. Typography
We utilize a high-contrast pairing of **Space Grotesk** (Display/Headlines) and **Inter** (UI/Body) to evoke a technical, editorial feel.

- **Display-LG (Counter Value):** `3.5rem / Space Grotesk / Bold`. This is the hero. It should feel massive, nearly touching the edges of its container. Use `tracking-tighter` to increase the "Brutalist" impact.
- **Headline-MD:** `1.75rem / Space Grotesk`. Used for section headers.
- **Body-MD:** `0.875rem / Inter`. Used for metadata or descriptions.
- **Label-SM:** `0.6875rem / Space Grotesk / Uppercase / Tracking-widest`. Used for button labels (e.g., "INCREMENT") to provide a technical, "instrument" aesthetic.

---

## 4. Elevation & Depth
We eschew traditional shadows for **Tonal Layering** and **Luminous Depth.**

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.

### Ambient Glows
Instead of dark drop shadows, use **Color-Tinted Ambient Glows**. 
- When an increment button is active, apply a shadow: `0 10px 40px -10px rgba(78, 222, 163, 0.3)`. 
- This mimics the way a physical neon light casts a glow on a dark surface.

### The "Ghost Border" Fallback
If a boundary is required for accessibility, use a **Ghost Border**: `outline-variant` (#3c4a42) at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### The "Pulse" Buttons (Primary/Secondary)
- **Styling:** Large, rounded-xl (`1.5rem`) shapes. 
- **Transitions:** Use `scale-95` on click and `scale-105` on hover. Transition duration should be `200ms` with a `cubic-bezier(0.34, 1.56, 0.64, 1)` for a "bouncy" tactile feel.
- **Visuals:** Primary buttons use the Emerald gradient; Secondary buttons use a subtle `secondary-container` fill with `on-secondary` text.

### The "Zero-Point" Reset (Tertiary)
- **Styling:** Ghost-style. No background fill. 
- **Visuals:** Uses `tertiary` (#b7c8e1) text with a subtle underline that expands on hover. 

### The Counter Display Card
- **Styling:** `surface-container-lowest`. 
- **Constraint:** Forbid divider lines. Use `p-12` (3rem) of vertical whitespace to separate the value from the controls.

### Additional Component: The "Haptic Feedback" Chip
- A small chip (`label-sm`) that appears briefly above the counter when a threshold is met (e.g., "100 reached"). Styled in `surface-bright` with a `primary` glow.

---

## 6. Do's and Don'ts

### Do
- **Do** embrace extreme whitespace. The counter value should have room to "breathe."
- **Do** use `on-surface-variant` (#bbcabf) for non-essential text to maintain hierarchy.
- **Do** ensure all interactive elements have a `scale` transition; a "flat" click is a failure in this system.

### Don't
- **Don't** use standard Tailwind `gray-800`. Stick strictly to the defined `surface` tokens to maintain the "Kinetic Monolith" mood.
- **Don't** use 1px dividers. If you feel the need for a line, use a 24px gap instead.
- **Don't** center everything. Try aligning the "Reset" button to the far right and the counter value to the far left for an editorial look.