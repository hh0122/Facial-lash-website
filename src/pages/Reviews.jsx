import TestimonialSlider from '../components/TestimonialSlider';
import GalleryGrid from '../components/GalleryGrid';
import { testimonials, galleryItems } from '../data/reviews';

export default function Reviews() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
      <header className="mt-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-deep/60">Proof</p>
        <h1 className="font-display text-4xl text-deep">Reviews & Gallery</h1>
        <p className="text-deep/70 max-w-3xl">
          Hear from Glow Ateria guests and explore before & after transformations across our lash and facial rituals.
        </p>
      </header>

      <div className="bg-white rounded-[32px] p-8 card-shadow">
        <TestimonialSlider testimonials={testimonials} />
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl text-deep">Before & After Gallery</h2>
          <p className="text-sm text-deep/60">Lashes • Facials • Glow-ups</p>
        </div>
        <GalleryGrid items={galleryItems} />
      </section>
    </div>
  );
}
