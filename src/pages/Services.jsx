import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { facialServices, lashServices } from '../data/services';

const categories = ['All', 'Facial', 'Lash'];

export default function Services() {
  const [category, setCategory] = useState('All');
  const services = [...facialServices, ...lashServices];
  const filtered = category === 'All' ? services : services.filter((s) => s.category === category);

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
          Select a category to explore detailed offerings. Each experience is customized to your skin, lash pattern, and
          lifestyle.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              category === c ? 'bg-gold text-white border-gold' : 'bg-white border-blush text-deep'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((service) => (
          <ServiceCard key={service.name} service={service} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
}
