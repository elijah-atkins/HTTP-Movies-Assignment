import React from 'react';

export const MovieForm = props => {
  //use props to set initial state

  const FormState = {
    title: '',
    director: '',
    metascore: '',
    stars: ''
  }

  
 
    return(
        <div>
                  <h2>Add New Movie</h2>
      <form onSubmit={e=>e.preventDefault()}>
        <input
          type="text"
          name="title"
   //       onChange={changeHandler}
          placeholder="Title"
          value={FormState.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
    //      onChange={changeHandler}
          placeholder="Director"
     //     value={movie.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
 //         onChange={changeHandler}
          placeholder="Metascore"
     //     value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="array"
          name="stars"
 //         onChange={changeHandler}
          placeholder="Stars"
       //   value={movie.stars}
        />
        <div className="baseline" />

        <button className="form-submit">Update Movie</button>
      </form>
        </div>
    )
};

export default MovieForm;