import { Link } from 'react-router-dom';
import { featuredServices } from '../data/services';
import { testimonials } from '../data/reviews';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
      <section className="grid md:grid-cols-2 gap-10 items-center mt-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-deep/60">Luxury skin & lash studio</p>
          <h1 className="font-display text-4xl md:text-5xl text-deep leading-tight">
            Glow Ateria elevates your glow with curated facials and bespoke lash artistry.
          </h1>
          <p className="text-deep/70 leading-relaxed">
            Step into a sanctuary of soft light, calm music, and expert estheticians focused on your goals.
            Every ritual is crafted to enhance your natural radiance with precision, safety, and relaxation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="px-6 py-3 rounded-full bg-gold text-white font-semibold shadow-glow hover:-translate-y-0.5 transition"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-full border border-deep/15 text-deep font-semibold bg-white hover:border-gold"
            >
              View Services
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-deep/70">
            <div className="h-2 w-2 rounded-full bg-gold" />
            <span>Medical-grade skincare • Gentle lash techniques • Cozy, serene studio</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[32px] overflow-hidden shadow-2xl gradient-sheen">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
              alt="Facial treatment"
              className="object-cover h-full w-full mix-blend-multiply"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-4 shadow-glow max-w-xs">
            <p className="text-sm text-deep/80">
              “Every visit feels like a mini retreat. The glow lasts for days.” — Olivia, member since 2022
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-deep/60">Signature picks</p>
            <h2 className="font-display text-3xl text-deep">Featured Services</h2>
          </div>
          <Link to="/services" className="text-deep/70 hover:text-gold text-sm font-semibold">
            Explore all services →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.name} service={service} onBook={() => {}} />
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-deep/60">Experience</p>
          <h2 className="font-display text-3xl text-deep">Every touchpoint is intentional</h2>
          <p className="text-deep/70 leading-relaxed">
            From curated playlists to warm towels and gentle aromatics, Glow Ateria is designed for deep exhale.
            We combine science-backed methods with artful application so you leave renewed and photo-ready.
          </p>
          <ul className="space-y-2 text-deep/80">
            <li>• Customized skin analysis and treatment plans</li>
            <li>• Lash maps tailored to your eye shape and lifestyle</li>
            <li>• Hygienic, dermatologist-approved protocols</li>
          </ul>
        </div>
        <div className="bg-white rounded-[32px] p-6 card-shadow">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
}
