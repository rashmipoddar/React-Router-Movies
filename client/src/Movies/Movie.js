import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  // We can also start with useState(). This means initially movie is undefined so we get inside the loop in line 36.

  useEffect(() => {
    const id = props.match.params.id;
    // console.log(props);

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

      axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          // console.log('The props are ', props);
          // console.log('The response is ', response.data);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <MovieCard movie={movie} />

}

export default Movie;
