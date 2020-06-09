import React, { useState, useEffect } from 'react';


const FormState = {
  title: '',
  director: '',
  metascore: '',
  stars: []
}

export const MovieForm = ({ movie}) => {
  console.log('MovieForm',movie )
  //use props to set initial state
  const [list, setList] = useState(FormState);

  useEffect(()=>{
    setList(movie)

  },[movie])

  return(
        <div>
                  <h2>Update Movie</h2>
      <form onSubmit={e=>e.preventDefault()}>
        <input
          type="text"
          name="title"
   //       onChange={changeHandler}
          placeholder="Title"
          value={list.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
    //      onChange={changeHandler}
          placeholder="Director"
          value={list.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
 //         onChange={changeHandler}
          placeholder="Metascore"
         value={list.metascore}
        />
        <div className="baseline" />

        <input
          type="array"
          name="stars"
 //         onChange={changeHandler}
          placeholder="Stars"
          value={list.stars}
        />
        <div className="baseline" />

        <button className="form-submit">Update Movie</button>
      </form>
        </div>
    )
};

export default MovieForm;