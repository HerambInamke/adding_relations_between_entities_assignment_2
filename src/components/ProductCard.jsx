import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '300px'
    }}>
      <img 
        src={product.image} 
        alt={product.name}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '4px'
        }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="rating-info">
        <p>Average Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
      </div>
      <RatingWidget 
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;