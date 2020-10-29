import React from 'react';
import PropTypes from 'prop-types';
import './TableItem.css';

const TableItem = ({type, amount, currency}) => {
  return (
  <tr className='transaction-item'>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
  );
};

export default TableItem;

TableItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
}