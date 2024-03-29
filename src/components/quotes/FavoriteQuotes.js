import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
  return (
    <section className="favorite-quotes">
      <div className="wrapper quotes">
        <h3>Top 3 Favorite Quotes</h3>
        <ul>
          {favoriteQuotes.map((favoriteQuote) => (
            <FavoriteQuoteCard
              key={favoriteQuote.id}
              favoriteQuote={favoriteQuote}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </ul>
      </div>
      <div className="favorite-quotes-description">
        <p>
          You can add up to three favorites by selecting from the options below.
          <br />
          Once you choose, they will appear here.
        </p>
      </div>
    </section>
  );
};

export default FavoriteQuotes;
