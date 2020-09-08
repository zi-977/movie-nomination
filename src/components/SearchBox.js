import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <input
      type='search' 
      placeholder='Search Movie Titles'
      onChange={searchChange}
      style={{width: '100%', border: 'solid rgb(220,220,220)',
              marginTop: '5px', borderRadius: '5px'}}
    />
  );
}

export default SearchBox;