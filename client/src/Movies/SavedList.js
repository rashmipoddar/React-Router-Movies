import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => {
  // console.log('The props in saved list component is ', props);
  const { push } = props.history;
  // console.log(props.list);
  // console.log(push);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        // <div key={movie.id}>
          <NavLink onClick = { () => console.log(movie.id) } to={`/movies/${movie.id}`}>
            <span key ={movie.id} className="saved-movie">{movie.title}</span>
          </NavLink>
        // </div>
      ))}
      {/* <div className="home-button" onClick={() => props.history.push("/")}>Home</div>  */}
      {/* Instead of using line 17 i can use line 14. For using line 18, first I destructed push from props.history in line 5.
      Then i called the push function on line 18 when the Home button is clicked. */}

      <div className="home-button" onClick={() => push("/")}>Home</div> 
    </div>
  );
}


export default SavedList;
