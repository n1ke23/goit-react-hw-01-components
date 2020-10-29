import React from 'react';
import Status from '../Status/Status';
import Title from './../Title/Title';
import Stats from './../Stats/Stats';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({stat}) => {

  return (
    <section className="statistics">
      <Title />

    <ul className="stat-list">
      {stat.map(elem => <Stats key={elem.id} label={elem.label} percentage={elem.percentage}/> )}
    </ul>
  </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  stat: PropTypes.array
}