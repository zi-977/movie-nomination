import React from 'react';
import Movie from '../components/Movie.js';

const NominationList = ({nominatedList, removehandler}) => {
  const nominationArray = nominatedList.map((user, i) => {
    return (
      <li key={i}>
        <Movie title={user.title} year={user.year} id={user.id}/>
        <button 
          onClick={removehandler}
          title={user.Title} year={user.Year} 
          id={user.id}
          style={{marginLeft: '5px', padding: '1px 5px 2px 5px'}}>
          Remove
        </button>
      </li>
    )
  })
  return (
    <ul>
      {nominationArray}
    </ul>
  );
}

export default NominationList;