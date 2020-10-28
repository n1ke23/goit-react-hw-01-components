import React from 'react';
import './Percentage.css'
import PropTypes from 'prop-types';

const Percentage = ({avatar, name, isOnline}) => {
  return (
    <li className="item">
      <span className={ isOnline ? 'green' : 'red'}>&#8226;</span>
      <img className={avatar} src="" alt="" width="48" />
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