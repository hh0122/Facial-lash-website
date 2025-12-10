# Glow Ateria — Facial & Lash Studio Website

A modern React + Tailwind CSS marketing site for the Glow Ateria facial and lash business. The site delivers a luxury, feminine aesthetic with responsive layouts, smooth animations, and clear calls to action.

## Project structure
```
/glow-ateria-site
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components
    │   ├── Footer.jsx
    │   ├── GalleryGrid.jsx
    │   ├── Navbar.jsx
    │   ├── ServiceCard.jsx
    │   └── TestimonialSlider.jsx
    ├── data
    │   ├── reviews.js
    │   └── services.js
    └── pages
        ├── About.jsx
        ├── Booking.jsx
        ├── Contact.jsx
        ├── Home.jsx
        ├── Reviews.jsx
        └── Services.jsx
```

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

> If installing packages is blocked in your environment, you can still review the code structure. When access is restored, run `npm install` to generate `package-lock.json` before building or serving the site.

## Tailwind setup notes
- Tailwind is configured in `tailwind.config.js` with brand colors (`blush`, `gold`, `deep`) and custom fonts (`Inter`, `Playfair Display`).
- Global styles and utility animations live in `src/index.css` (includes `@tailwind base`, `components`, and `utilities`).
- Content scanning covers `index.html` and all files under `src/`.

## Dummy content
- Services and pricing: `src/data/services.js`
- Testimonials and gallery: `src/data/reviews.js`
- Imagery uses curated Unsplash URLs as placeholders; swap with branded assets as needed.

## Integrating a booking API later
- Replace the placeholder `alert` in `src/pages/Booking.jsx` with an async call to your booking endpoint.
- Recommended flow:
  1. Validate form input and disable the submit button during requests.
  2. POST the booking payload (`name`, `email`, `phone`, `date`, `time`, `service`, `notes`) to your API.
  3. Handle success by showing a confirmation toast and clearing the form.
  4. Handle errors gracefully with inline messaging.
- Add environment variables (e.g., `VITE_BOOKING_API_URL`) for the API base URL and include them via `import.meta.env`.
- If your provider returns available slots, populate `timeSlots` in `Booking.jsx` dynamically rather than using the static list.

## Accessibility & UX
- Sticky navigation with responsive mobile menu.
- Button/CTA focus states and descriptive labels on slider controls.
- Responsive grids across services, testimonials, and gallery.

## License
This project is provided for demonstration purposes for Glow Ateria.
