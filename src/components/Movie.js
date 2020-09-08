import React from 'react';

const movie = ({title, year, id}) => {
  return ( 
    <React.Fragment>   
    {title}({year})
    </React.Fragment>
  );
}

export default movie;