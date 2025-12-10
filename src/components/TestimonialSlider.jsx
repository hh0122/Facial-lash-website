import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <div className="relative bg-white rounded-3xl p-8 card-shadow">
      <div className="flex items-start gap-4 fade-in">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blush to-gold text-white flex items-center justify-center font-semibold">
          “
        </div>
        <div>
          <p className="text-deep/80 leading-relaxed text-sm md:text-base">{current.quote}</p>
          <div className="mt-4">
            <p className="font-semibold text-deep">{current.name}</p>
            <p className="text-xs text-deep/60">{current.service}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition ${
              i === index ? 'bg-gold' : 'bg-blush'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

TestimonialSlider.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      service: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
