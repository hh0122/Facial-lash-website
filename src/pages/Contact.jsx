export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
      <header className="mt-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-deep/60">Contact</p>
        <h1 className="font-display text-4xl text-deep">Get in touch</h1>
        <p className="text-deep/70 max-w-3xl">
          Questions about a treatment, lash aftercare, or memberships? Send a note and we will respond within one business day.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <form className="bg-white rounded-[28px] p-6 card-shadow space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-deep/80">
              Name
              <input className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-deep/80">
              Email
              <input
                type="email"
                className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Phone
            <input className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Message
            <textarea
              rows="4"
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
              placeholder="Tell us about your skin goals or lash inspiration"
            />
          </label>
          <button className="px-6 py-3 rounded-full bg-deep text-white font-semibold hover:bg-gold transition">
            Send Message
          </button>
        </form>

        <div className="space-y-4">
          <div className="bg-white rounded-[28px] p-6 card-shadow space-y-3">
            <h2 className="font-display text-2xl text-deep">Studio</h2>
            <p className="text-deep/70">3540 W University Dr STE 200, McKinney, TX 75071</p>
            <p className="text-deep/70">(469) 989-5036</p>
            <p className="text-deep/70">glow.ateria25@gmail.com</p>
            <div className="flex gap-3 text-sm text-deep/70 pt-2">
              <a href="#" className="hover:text-gold">Instagram</a>
              <a href="#" className="hover:text-gold">TikTok</a>
              <a href="#" className="hover:text-gold">Pinterest</a>
            </div>
          </div>
          <div className="bg-white rounded-[28px] p-6 card-shadow space-y-2">
            <h3 className="font-semibold text-deep">Map</h3>
            <div className="h-56 rounded-2xl bg-gradient-to-br from-blush to-gold/60 flex items-center justify-center text-deep/70">
              Embedded Google Map placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
