import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

//initial state to clear form
const FormState = {
  title: '',
  director: '',
  metascore: '',
  stars: []
}

export const MovieForm = ({ movie }) => {
  const { push } = useHistory();
 // console.log('MovieForm',movie )
 //create state object using useState
 const [editMovie, setEditMovie] = useState(FormState);
  //use props to set initial state


  useEffect(()=>{
    setEditMovie(movie)
  },[movie])

  const changeHandler = e => {
    setEditMovie({
      ...editMovie,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = e => {
    e.preventDefault();
    // make a PUT request to edit the item
    const newMovie = {
      id: editMovie.id,
      title: editMovie.title,
      director: editMovie.director,
      metascore: editMovie.metascore,
      stars: (editMovie.stars === movie.stars) ? editMovie.stars : [...editMovie.stars.split(",")]
  }
    axios
      .put(`http://localhost:5000/api/movies/${editMovie.id}`, newMovie)
      .then(res => {

        push(`/movies/${editMovie.id}`);
      })
      .catch(err =>
        console.error(
          "UpdateForm.js: handleSubmit: ",
          err.message,
          err.response
        )
      );
  };
  return(
        <div className="movie-form">
                  <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={editMovie.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={editMovie.director}
        />
        <div className="baseline" />

        <input
          type="number"
          min="0"
          max="100"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
         value={editMovie.metascore}
        />
        <div className="baseline" />

        <textarea
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={editMovie.stars}
        />
        <div className="baseline" />

        <button className="form-submit">Update Movie</button>
      </form>
        </div>
    )
};

export default MovieForm;