import React from 'react';
import PropTypes from 'prop-types';
import Percentage from '../Percentage/Percentage';

const FriendList = ({friends}) => {
  return (
  <ul>
   {friends.map(elem => <Percentage  key={elem.id} avatar={elem.avatar} name={elem.name} isOnline={elem.isOnline} />)}
  </ul>
  );
};

export default FriendList;

Percentage.propTypes = {
  friends: PropTypes.array,
}