import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const ids = savedList.map(movie => movie.id ); 
    if (!ids.includes(movie.id)) {
      // console.log(movie.id);
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      {/* <SavedList list={savedList} /> */}
      <Route path ='/' render = { props => <SavedList {...props} list={savedList} /> } />
      {/* <Route exact path='/' component={MovieList} /> */}
      <Route exact path='/' render = { props => <MovieList {...props} addToSavedList={addToSavedList}/>} />
      <Route path='/movies/:id' render = { props => <Movie {...props } addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
