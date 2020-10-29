import React from 'react';
import PropTypes from 'prop-types';
import './Status.css';

const Status = ( {label, quantity} ) => {
  return (

  <li className="item-status">
    <span className="label">{label}</span>
    <span className="quantity">{quantity}</span>
  </li>

  );
};

export default Status;

Status.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number
}