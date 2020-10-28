import React from 'react';
import Status from '../Status/Status';
import PropTypes from 'prop-types';


const Profile = ({ user }) => {
  console.log(user);
  // console.log(user.stats);     
  return (
    <>
    <div className="profile">
      <div className="description">
        <img
          src={user.avatar}
          alt="user avatar"
          className="avatar"
        />
        <p className="name">{user.name}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">

      {Object.entries(user.stats).map(elem => <Status key={elem[0]} label={elem[0]}  quantity={elem[1]} />) }
{/* 
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li> */}

      </ul>
    </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.object
}