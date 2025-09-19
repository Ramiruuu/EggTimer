# EggTimer

Modern Egg Timer Cooker is a simple web app to time eggs: soft (4 min), medium (6 min), or hard (10 min). Pick a type, see its image (runny, creamy, or firm yolk), and start the countdown. A progress ring fills up, the screen flashes, and it beeps when done. Mobile-ready, no extras needed.

---

## Features

- **Preset Timers:** Choose from Soft Boiled (4 min), Medium Boiled (6 min), or Hard Boiled (10 min) via a dropdown.
- **Visual Feedback:** Animated SVG progress ring shows countdown progress with a gradient effect.
- **Audio Feedback:** A 440Hz beep plays when the timer finishes (using Web Audio API).
- **Interactive Controls:** Start/Reset button and disabled dropdown during countdown for intuitive use.
- **Fully Responsive:** Optimized for all screen sizes, including small phones (down to 320px), with scalable fonts, padding, and timer ring.
- **Touch-Friendly:** Large button and dropdown for easy mobile interaction.
- **Clean Code:** Separated HTML, CSS, and JS for maintainability.

---

## Mockup Description

The UI is a centered, white card (90% viewport width, rounded corners, subtle shadow) on a gradient background (red `#ff6b6b` to teal `#4ecdc4`). It includes:

- A bold title ("Egg Timer Cooker") in red.
- A styled dropdown for selecting egg doneness.
- A scalable SVG ring (gray base, red-to-teal gradient progress) with centered time display.
- A red "Start" button (toggles to "Reset") with hover and disabled states.
- A flash animation (white to teal) on completion, paired with a beep.

---

## Setup

1. Clone or download the repository.
2. Ensure the following files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open `index.html` in a modern web browser (e.g., Chrome, Firefox, Edge).

---

## Usage

1. Select an egg doneness level from the dropdown (Soft, Medium, or Hard).
2. Click the "Start" button to begin the countdown. The progress ring animates, and the time updates every second.
3. When the timer finishes, the card flashes, a beep plays, and the button changes to "Reset."
4. Click "Reset" to stop and reset the timer, or choose a new doneness level to update the time.

---

## File Structure

- `index.html`: Defines the structure of the app (dropdown, timer display, button).
- `styles.css`: Styles the UI with CSS custom properties, Flexbox, SVG animations, and media queries for responsiveness.
- `script.js`: Handles timer logic, progress updates, and audio feedback using vanilla JavaScript.

---

## Technologies

- **HTML5:** For semantic structure.
- **CSS3:** For styling, animations, and responsive design (Flexbox, SVG, custom properties, media queries).
- **JavaScript:** For timer functionality and Web Audio API for the beep sound.
- **No external libraries are used.**

---

## Responsiveness

- Optimized for all phone sizes (down to 320px) using `clamp()`, `vw`, and media queries.
- Timer ring scales down on smaller screens (120px to 100px below 400px).
- Font sizes and padding adjust dynamically for readability.
- Touch-friendly controls with `touch-action: manipulation` for smooth mobile interaction.

---

## Notes

- The app is lightweight and dependency-free.
- The SVG progress ring uses a percentage-based radius for scalability, with circumference adjusted dynamically (282.6 or 226.1).
- The Web Audio API generates a sine wave beep (440Hz, 0.3s duration).
- Tested on modern browsers (Chrome, Firefox, Edge) as of September 2025.

---

## Improvements

- Add pause/resume functionality for the timer.
- Allow custom timer inputs for user-defined durations.
- Enhance accessibility (ARIA labels, keyboard navigation).
- Add more egg types or cooking methods.
- Improve visual feedback (e.g., animated yolk images).
- Option to disable sound or change beep tone.
- Save last selected doneness in local storage.
- Add dark mode toggle.

---

## Contributing

Feel free to fork the repository, submit issues, or create pull requests for improvements (e.g., adding pause functionality, custom timer inputs, or enhanced styling).

---

## License

This project is licensed under the MIT License. See the LICENSE file for details (not included in this basic setup).

---

## Contact

For questions or suggestions, reach out via the repository's issue tracker or contact the xAI team at x.ai.
