import React from "react";

const FavoriteQuoteCard = ({ favoriteQuote, removeFromFavorites }) => {
  return (
    <li className="quote-card">
      <span
        className="close-quote"
        onClick={() => removeFromFavorites(favoriteQuote.id)}
      >
        X
      </span>
      <h3>{favoriteQuote.author}</h3>
      <p>{favoriteQuote.text}</p>
    </li>
  );
};

export default FavoriteQuoteCard;
