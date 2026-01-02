import { useEffect, useState } from 'react';
import { addTreatment, getCustomerSummary, suggestNextService } from '../data/customerDb';

const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM'];

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [customerSummary, setCustomerSummary] = useState(null);
  const [suggestedService, setSuggestedService] = useState('');

  useEffect(() => {
    if (!form.email) {
      setCustomerSummary(null);
      setSuggestedService('');
      return;
    }

    const summary = getCustomerSummary(form.email);
    setCustomerSummary(summary);
    setSuggestedService(suggestNextService(summary?.treatments || []));
  }, [form.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mldgjpze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _subject: 'New booking request from Glow Ateria',
        }),
      });

      if (!response.ok) {
        throw new Error('We were unable to send your booking. Please try again.');
      }

      setSuccessMessage('Thank you! Your request has been sent. We will confirm shortly.');
      addTreatment(form);
      const summary = getCustomerSummary(form.email);
      setCustomerSummary(summary);
      setSuggestedService(suggestNextService(summary?.treatments || []));
      setForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        notes: '',
      });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="bg-white rounded-[32px] p-8 mt-10 card-shadow">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-deep/80">Book</p>
            <h1 className="font-display text-3xl text-deep">Reserve your Glow Ateria ritual</h1>
            <p className="text-deep/90 max-w-2xl mt-2">
              Choose your date, time, and preferred service. We will confirm promptly and prepare the studio for your arrival.
            </p>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-blush text-deep/80 text-sm max-w-xs">
            <p className="font-semibold text-deep">Booking tips</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Arrive 10 minutes early for consultation.</li>
              <li>Contact us if you have allergies or sensitivities.</li>
              <li>All appointments include aftercare guidance.</li>
            </ul>
          </div>
        </div>
        <form id="booking-intent" onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Full name
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
              placeholder="Alex Rivera"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Email
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
              placeholder="you@example.com"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Phone
            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
              placeholder="(213) 555-0199"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Service
            <input
              name="service"
              value={form.service}
              onChange={handleChange}
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
              placeholder="Radiance Renewal Facial"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Preferred date
            <input
              required
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-deep/80">
            Time
            <select
              required
              name="time"
              value={form.time}
              onChange={handleChange}
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
            >
              <option value="">Select a time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-deep/80 md:col-span-2">
            Notes
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="4"
              className="rounded-xl border border-blush bg-blush/40 px-4 py-3 focus:border-gold focus:outline-none"
              placeholder="Share your goals, allergies, or lash preference"
            />
          </label>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-xs text-deep/80">No payment is processed here. We confirm appointments via email/text.</p>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-full bg-deep text-white font-semibold hover:bg-gold transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Appointment'}
              </button>
              {successMessage && <p className="text-sm text-emerald-700">{successMessage}</p>}
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
          </div>
        </form>
        <div className="mt-10 rounded-[28px] border border-blush bg-blush/30 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-deep/80">Client history</p>
              <h2 className="font-display text-2xl text-deep">Track your treatments</h2>
              <p className="text-deep/80 mt-2 max-w-2xl">
                Enter your email above to view past visits, your unique client ID, and a recommended next service.
              </p>
            </div>
            {customerSummary && (
              <div className="rounded-2xl bg-white/80 px-4 py-3 text-sm text-deep/80">
                <p className="font-semibold text-deep">Client ID</p>
                <p className="font-mono text-deep/90">{customerSummary.id}</p>
              </div>
            )}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl bg-white/80 p-4">
              <p className="text-sm font-semibold text-deep">Treatment history</p>
              {customerSummary?.treatments?.length ? (
                <ul className="mt-3 space-y-3 text-sm text-deep/80">
                  {customerSummary.treatments.slice(0, 4).map((treatment) => (
                    <li key={treatment.id} className="rounded-xl border border-blush/60 bg-white px-3 py-2">
                      <p className="font-semibold text-deep">{treatment.service}</p>
                      <p>
                        {treatment.date} · {treatment.time}
                      </p>
                      {treatment.notes && <p className="text-deep/70">Notes: {treatment.notes}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-deep/70">
                  No past treatments yet. Your visits will appear here once you book your first appointment.
                </p>
              )}
            </div>
            <div className="rounded-2xl bg-white/80 p-4">
              <p className="text-sm font-semibold text-deep">Suggested next step</p>
              <p className="mt-3 text-sm text-deep/80">
                {suggestedService ||
                  'Share your email above to unlock a personalized recommendation based on your past services.'}
              </p>
              {customerSummary && (
                <div className="mt-4 rounded-xl bg-blush/60 px-3 py-2 text-sm text-deep/80">
                  <p className="font-semibold text-deep">Preferred contact</p>
                  <p>{customerSummary.email}</p>
                  {customerSummary.phone && <p>{customerSummary.phone}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
