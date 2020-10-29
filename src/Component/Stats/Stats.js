import React from 'react';
import PropTypes from 'prop-types';
import './Stats.css';

const Stats = ({label, percentage}) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default Stats;

Stats.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number
}