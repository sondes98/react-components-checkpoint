// ProfilePhoto.js: a functional component that returns a photo of your profile.
import React from 'react';
import image from './profile.png';
function ProfilePhoto(){
    return (
      
        <img className="image" src={image} alt=""/>
      
    );
   };
   export default ProfilePhoto;