import React from 'react';
import PropTypes from 'prop-types';
import './Percentage.css';

const Percentage = ({avatar, name, isOnline}) => {
  return (
    <li className="item-percentage">
      <span className={ isOnline ? 'green span' : 'red span'}>&#8226;</span>
      <img className="img" src={avatar} alt="social img" width="48" />
  <p className="name">{name}</p>
    </li>
  ); 
};

export default Percentage;

Percentage.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}