export default function Footer() {
  return (
    <footer className="border-t border-blush/60 bg-blush/40 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg mb-2 text-deep">Glow Atelier</h3>
          <p className="text-sm text-deep/90 leading-relaxed">
            Luxury facials and lash artistry in a serene, modern studio. Discover a glow that lasts.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-deep mb-2">Hours</h4>
          <ul className="text-sm text-deep/90 space-y-1">
            <li>Mon - Fri: 9:00 AM - 7:00 PM</li>
            <li>Sat: 10:00 AM - 5:00 PM</li>
            <li>Sun: By appointment</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-deep mb-2">Visit</h4>
          <p className="text-sm text-deep/90">737 Hollow Ridges </p>
          <p className="text-sm text-deep/90">Allen, TX 75002</p>
          <p className="text-sm text-deep/90 mt-2">(469) 989-5036</p>
          <p className="text-sm text-deep/90">glow.atelia25@gmail.com</p>
          <div className="flex gap-3 mt-3 text-deep/90 text-sm">
            <a href="#" className="hover:text-gold transition">Instagram</a>
            <a href="#" className="hover:text-gold transition">TikTok</a>
            <a href="#" className="hover:text-gold transition">Facebook</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-deep/80 pb-6">
        © {new Date().getFullYear()} Glow Atelier. All rights reserved.
      </div>
    </footer>
  );
}
