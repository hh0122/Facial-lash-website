import PropTypes from 'prop-types';

export default function GalleryGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative overflow-hidden rounded-3xl group shadow-md"
        >
          <img
            src={item.image}
            alt={item.label}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
            <p className="text-white font-medium p-4">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

GalleryGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
