import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

//initial state to clear form
const FormState = {
  id: '',
  title: '',
  director: '',
  metascore: '',
  stars: []
}

export const AddMovie = () => {
  const { push } = useHistory();
 // console.log('MovieForm',movie )
 //create state object using useState
 const [addMovie, setAddMovie] = useState(FormState);
  //use props to set initial state


  const changeHandler = e => {
    setAddMovie({
      ...addMovie,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = e => {
    e.preventDefault();
    const newMovie = {
        title: addMovie.title,
        director: addMovie.director,
        metascore: addMovie.metascore,
        stars: addMovie.stars.split(",")
    }
    axios
      .post(`http://localhost:5000/api/movies/`, newMovie)
      .then(res => {
       console.log(res.data);
        push(`/`);
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
                  <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={addMovie.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={addMovie.director}
        />
        <div className="baseline" />

        <input
          type="number"
          min="0"
          max="100"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
         value={addMovie.metascore}
        />
        <div className="baseline" />

        <textarea
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={addMovie.stars}
        />
        <div className="baseline" />

        <button className="form-submit">Add Movie</button>
      </form>
        </div>
    )
};

export default AddMovie;