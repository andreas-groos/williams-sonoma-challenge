import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section id="product-grid">
      <ul>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ul>
    </section>
  );
}
const imgShapeType = PropTypes.shape({
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
});

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      flags: PropTypes.array.isRequired,
      hero: imgShapeType,
      id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(imgShapeType),
      links: PropTypes.shape({
        www: PropTypes.string.isRequired,
      }).isRequired,
      messages: PropTypes.array.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.object,
      reviews: PropTypes.object.isRequired,
      swatches: PropTypes.array.isRequired,
      thumbnail: imgShapeType,
    })
  ),
};
