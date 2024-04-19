import { useState } from "react";
import MovieItem from "../movieItem/MovieItem";
import "./categorieItem.css";
function CategorieItem({ category, allMovies }) {
  const [translate, setTranslate] = useState(0);

  function translateBack() {
    setTranslate((state) => state + 400);
    console.log(translate);
  }
  function translateForward() {
    setTranslate((state) => state - 400);
  }
  return (
    <div key={category} className="categorie-item">
      <h2 className="movie-category">{category}</h2>
      <div className="all-movies-in-row-relative">
        <div
          className="all-movies-in-row"
          style={{ transform: `translateX(${translate}%)` }}
        >
          {allMovies.map((movie) => {
            return (
              movie.type === category && (
                <MovieItem movie={movie} key={movie.id} />
              )
            );
          })}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="arrow-left"
          onClick={translateBack}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="arrow-right"
          onClick={translateForward}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default CategorieItem;
