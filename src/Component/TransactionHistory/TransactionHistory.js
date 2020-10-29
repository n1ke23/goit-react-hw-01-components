import React from 'react';
import TableItem from '../TableItem/TableItem';
import PropTypes from 'prop-types';
import './TransactionHistory.css'

const TransactionHistory = ({trans}) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

  <tbody>
  {trans.map(elem => <TableItem key={elem.id} type={elem.type} amount={elem.amount} currency={elem.currency} />)}
  </tbody>
</table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes={
  trans: PropTypes.array
}