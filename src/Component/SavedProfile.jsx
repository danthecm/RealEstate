// import React from 'react'
// import profileOne from '../assets/profileOne.png';
// import profileTwo from '../assets/profileTwo.png';
// import profileThree from '../assets/profileThree.png';

// const SavedProfile = () => {
//   return (
//     <div>SavedProfile</div>
//   )
// }

// export default SavedProfile


import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import profileOne from '../assets/profileOne.png';
import profileTwo from '../assets/profileTwo.png';
import profileThree from '../assets/profileThree.png';
import location from '../assets/location.png';
import ratingstar from '../assets/ratingstar.png';


const Favourite = () => {
  

  return (
    <div className="main-container">
      <div className="sidebar">
        <h3>Sidebar</h3>
        <p>Content for the sidebar.</p>
        <p>My listing icon</p>
      </div>

      <div className="content">
        <div className='my-listing mx-3'>Saved profile</div>

        <div>
        <Card body>
        <div className="profile-container">
  <div>
    <img src={profileOne} alt="profileOne" className="profile-image" />
  </div>
  <div className="profile-text">
    <div className='profile-name'>Abdul Suleiman</div>
    <div className='profile-info'>
    <div className='m-0 p-0' >
       <img src={location} alt="location" className="location" />
       Apo Duste, Abuja
       </div>
       <div className='m-0 p-0 rating-container'>
  <img src={ratingstar} alt="ratingstar" className="star" />
  <img src={ratingstar} alt="ratingstar" className="star" />
  <img src={ratingstar} alt="ratingstar" className="star" />
  <img src={ratingstar} alt="ratingstar" className="star" />
  <img src={ratingstar} alt="ratingstar" className="star" />
  <span className="rating-text">4.5 * 250 Reviews</span>
</div>

<div className='m-0 p-0'>150 Houses sold in total</div>
<button className='profile-button mt-1'>Rentals</button>
    </div>
  </div>
</div>

        </Card>
        </div>

      </div>
    </div>
  );
};

export default Favourite;
