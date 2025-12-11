export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
      <header className="mt-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-deep/60">About</p>
        <h1 className="font-display text-4xl text-deep">Glow Atelier</h1>
        <p className="text-deep/70 max-w-3xl">
          A modern facial and lash studio founded on comfort, artistry, and science-backed skincare. We create rituals that
          celebrate your natural features with gentle, meticulous care.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[28px] p-6 card-shadow space-y-4">
          <h2 className="font-display text-2xl text-deep">Our mission</h2>
          <p className="text-deep/70 leading-relaxed">
            To deliver luminous skin and effortless lashes through thoughtful service design, mindful products, and advanced
            techniques. We believe beauty time should feel restorative and empowering.
          </p>
          <ul className="space-y-2 text-deep/80">
            <li>• Ingredient-conscious, dermatologist-approved partners</li>
            <li>• Ongoing education in lash health and skin science</li>
            <li>• Calm, inclusive, sensory-friendly environment</li>
          </ul>
        </div>
        <div className="bg-white rounded-[28px] p-6 card-shadow space-y-4">
          <h2 className="font-display text-2xl text-deep">Meet the esthetician</h2>
          <p className="text-deep/70 leading-relaxed">
            Founder & Lead Esthetician Lindsie Bui specializes in skin barrier repair, sculpting massage, and lash artistry. With
            a background in dermatology clinics and luxury spas, she blends medical insight with spa-level comfort.
          </p>
          <div className="p-4 rounded-2xl bg-blush/60 text-sm text-deep/80">
            “I want every guest to feel seen and supported. The best results come from listening, educating, and creating a plan
            that fits your lifestyle.” — Lindsie Bui
          </div>
        </div>
      </section>
    </div>
  );
}
