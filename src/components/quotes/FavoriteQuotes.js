import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
  return (
    <section className="favorite-quotes">
      <div className="wrapper quotes">
        <h3>Top 3 Favorite Quotes</h3>
        <ul>
          {favoriteQuotes.map((favoriteQuote, index) => (
            <FavoriteQuoteCard
              key={favoriteQuote.id}
              favoriteQuote={favoriteQuote}
              removeFromFavorites={removeFromFavorites}
              listPosition={index + 1}
            />
          ))}
        </ul>
      </div>
      <div className="favorite-quotes-description">
        <p>
          {favoriteQuotes.length === 0 &&
            "You can add 3 more quotes to your top three favorites by selecting from the options below"}
          {favoriteQuotes.length === 1 &&
            "You can add 2 more quotes to your top three favorites by selecting from the options below"}
          {favoriteQuotes.length === 2 &&
            "You can add 1 more quotes to your top three favorites by selecting from the options below"}
        </p>
      </div>
    </section>
  );
};

export default FavoriteQuotes;
