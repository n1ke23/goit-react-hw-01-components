import React from 'react';
import Stats from '../Stats/Stats';


const Profile = ({users}) => {
  return (

    <div className="profile">
      <div className="description">
        <img
          src={users.avatar}
          alt="user avatar"
          class="avatar"
        />
        <p className="name">{users.name}</p>
        <p className="tag">{users.tag}</p>
        <p className="location">{users.location}</p>
      </div>

      <ul className="stats">

        <Stats stats/>

        <li>
  <span className="label">{users.stats.}</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>

      </ul>
    </div>

  );
};

export default Profile;