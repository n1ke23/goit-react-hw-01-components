import React from 'react';

const Stats = (stats) => {
  console.log(stats);
  return (
    <>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </>
  );
};

export default Stats;