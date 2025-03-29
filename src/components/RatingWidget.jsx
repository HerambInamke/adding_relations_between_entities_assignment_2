import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className="star"
            color={(hoveredRating || rating) >= star ? "#ffc107" : "#e4e5e9"}
            size={20}
            style={{ marginRight: 10, cursor: 'pointer' }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          />
        ))}
      </div>
      <button 
        onClick={handleSubmit}
        disabled={!rating}
        style={{ marginTop: '10px' }}
      >
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;