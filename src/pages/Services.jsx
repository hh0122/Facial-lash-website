import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { facialServices, lashServices } from '../data/services';

const primaryCategories = [
  {
    key: 'Facial',
    title: 'Facial Rituals',
    copy: 'Skin-first experiences with targeted pre-treatments, chemical peels, and main treatments.',
  },
  {
    key: 'Lash',
    title: 'Lash Artistry',
    copy: 'Custom lifts, tints, and extensions tailored to the way you frame your eyes.',
  },
];
const facialCategories = ['All', 'Pre-Treatment', 'Chemical Peel', 'Main Treatment'];

export default function Services() {
  const [primaryCategory, setPrimaryCategory] = useState('Facial');
  const [facialCategory, setFacialCategory] = useState('All');

  useEffect(() => {
    if (primaryCategory === 'Lash') {
      setFacialCategory('All');
    }
  }, [primaryCategory]);

  const filtered =
    primaryCategory === 'Lash'
      ? lashServices
      : facialCategory === 'All'
        ? facialServices
        : facialServices.filter((service) => service.category === facialCategory);

  const handleBook = (service) => {
    const bookingForm = document.getElementById('booking-intent');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
      bookingForm.querySelector('input[name="service"]').value = service.name;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
      <header className="space-y-3 mt-10">
        <p className="text-sm uppercase tracking-[0.3em] text-deep/60">Our menu</p>
        <h1 className="font-display text-4xl text-deep">Facial & Lash Services</h1>
        <p className="text-deep/70 max-w-3xl">
          Choose between our two signature experiences. Select "Facial" for skin-forward rituals with Pre-Treatment,
          Chemical Peel, and Main Treatment options, or pick "Lash" to view eye-focused artistry.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {primaryCategories.map(({ key, title, copy }) => {
          const isActive = primaryCategory === key;
          return (
            <button
              type="button"
              key={key}
              onClick={() => setPrimaryCategory(key)}
              className={`text-left p-5 rounded-2xl border transition shadow-sm hover:shadow-md ${
                isActive ? 'bg-deep text-white border-deep' : 'bg-white text-deep border-blush'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] opacity-70">Primary category</p>
                  <p className="font-display text-2xl">{title}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs border ${
                    isActive ? 'border-white/60 bg-white/10' : 'border-blush bg-blush/40 text-deep'
                  }`}
                >
                  {isActive ? 'Viewing' : 'View'}
                </span>
              </div>
              <p className={`mt-3 text-sm ${isActive ? 'text-white/90' : 'text-deep/70'}`}>{copy}</p>
            </button>
          );
        })}
      </div>

      {primaryCategory === 'Facial' && (
        <div className="rounded-2xl border border-blush bg-white p-4 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-deep/60">Facial subcategories</p>
              <p className="text-deep font-medium">Explore the facial flow</p>
            </div>
            <span className="text-xs text-deep/60">Pre-Treatment · Chemical Peel · Main Treatment</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {facialCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFacialCategory(c)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  facialCategory === c ? 'bg-deep text-white border-deep' : 'bg-white border-blush text-deep'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((service) => (
          <ServiceCard key={service.name} service={service} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
}
