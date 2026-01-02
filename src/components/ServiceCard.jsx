import PropTypes from 'prop-types';

export default function ServiceCard({ service, onBook }) {
  return (
    <div className="bg-white rounded-3xl p-6 card-shadow hover:-translate-y-1 transition fade-in">
      <div className="flex items-start gap-4">
        <img
          src={service.image}
          alt={service.name}
          className="h-20 w-20 object-cover rounded-2xl shadow-md"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-deep">{service.name}</h3>
            <span className="text-gold font-semibold">{service.price}</span>
          </div>
          <p className="text-sm text-deep/90 mt-2 leading-relaxed">{service.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {service.features?.map((item) => (
              <span key={item} className="px-3 py-1 text-xs rounded-full bg-blush/70 text-deep/80">
                {item}
              </span>
            ))}
          </div>
          <button
            onClick={() => onBook(service)}
            className="mt-4 px-4 py-2 rounded-full bg-deep text-white text-sm hover:bg-gold transition"
          >
            Book {service.category}
          </button>
        </div>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onBook: PropTypes.func,
};
