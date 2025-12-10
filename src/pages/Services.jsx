import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { facialServices, lashServices } from '../data/services';

const primaryCategories = ['Facial', 'Lash'];
const facialCategories = ['All', 'Pre-Treatment', 'Chemical Peel', 'Main Treatment'];

export default function Services() {
  const [primaryCategory, setPrimaryCategory] = useState('Facial');
  const [facialCategory, setFacialCategory] = useState('All');

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
          Browse our services by the two main experiences we offer: facial treatments and lash artistry. Within facials,
          explore Pre-Treatment, Chemical Peel, and Main Treatment options to find the perfect ritual for your skin goals.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        {primaryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setPrimaryCategory(c)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              primaryCategory === c ? 'bg-gold text-white border-gold' : 'bg-white border-blush text-deep'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {primaryCategory === 'Facial' && (
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
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((service) => (
          <ServiceCard key={service.name} service={service} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
}
