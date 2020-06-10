import React from 'react';
import { useHistory } from 'react-router-dom';


const MovieCard = props => {
  const { push } = useHistory();
  const { title, director, metascore, stars, id } = props.movie;
  const editMovie = () => {
    push(`/update-movie/${id}`)
  }
  return (
    <div className="movie-card">
<div className="edit-button" onClick={editMovie}>
<h2>{title}</h2>
</div>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
