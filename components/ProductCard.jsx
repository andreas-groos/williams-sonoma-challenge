import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Img from "next/image";
import PlaceholderImg from "./PlaceholderImg";
import ImgOverlay from './ImageOverlay'

function ProductCard({ product }) {
  const [isShowingOverlay, setIsShowingOverlay] = useState(false)
  const { hero, images } = product;

  const displayedPrice = () => {
    try {
      return product.price?.selling ? `On Sale: ${product.price.selling}$` : `${product.price.regular}$`
    }
    catch {
      return `Out of stock`
    }
  }

  return (
    <div className="product-card" onClick={() => setIsShowingOverlay(true)}>
      {hero ? (
        <Img
          src={hero.href}
          alt={hero.alt}
          height={hero.height}
          width={hero.width}
        />
      ) : (
        <PlaceholderImg />
      )}
      <div className="product-name">
        <h2>{product.name.replace("&amp;", "&")}</h2>
      </div>
      {/* <div className="description">
        <h1>ToDo?</h1>
      </div> */}
      <span className="price">{displayedPrice()}</span>
      { isShowingOverlay && <ImgOverlay images={images} setIsShowingOverlay={setIsShowingOverlay} />}
    </div>
  );
}

export const imgShapeType = PropTypes.shape({
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
});

const productShape = PropTypes.shape({
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
});

ProductCard.propTypes = {
  product: productShape,
};

export default ProductCard;
