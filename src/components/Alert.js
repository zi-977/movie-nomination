import React from 'react';
import './Alert.css';

class Alert extends React.Component {
  handleClick = (event) => {
    event.currentTarget.parentNode.style.display = "none";
  }
  render() {
    const message = this.props.nominatedList.length === 5 ? 
    (<div className='banner'>
       <p className='text'>You have nominated 5 movies!</p>
       <button className='btn' onClick={this.handleClick}>OK</button>
     </div>
    ) : null
  return message;
  }
}

export default Alert;