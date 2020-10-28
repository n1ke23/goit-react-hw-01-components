import React from 'react';
import PropTypes from 'prop-types';
const Status = ( {label, quantity} ) => {
  return (

    <li>
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