import React from 'react';

const SavedList = props => {
  // console.log('The props in saved list component is ', props);
  const { push } = props.history;
  // console.log(push);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {/* {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))} */}
      {/* <div className="home-button" onClick={() => props.history.push("/")}>Home</div>  */}
      {/* Instead of using line 17 i can use line 14. For using line 18, first I destructed push from props.history in line 5.
      Then i called the push function on line 18 when the Home button is clicked. */}

      <div className="home-button" onClick={() => push("/")}>Home</div> 
    </div>
  );
}


export default SavedList;
