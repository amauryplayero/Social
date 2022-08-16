import React from 'react';

import './App.css';
import BackgroundImages from './Components/BackgroundImages'
import {EverythingContainer} from './Components/EverythingContainer';

function App() {

  return (
    <>
    <div id="backgroundImagesInAppContainer">
      <BackgroundImages />
    </div>


    <div id="EverythingContainerInAppContainer">
    <div id="profilePictureContainer">
      <div id="profilePictureContainerDiv">
        <img id="profilePicture"src="https://i.imgur.com/iTMipbR.jpg" alt="Profile picture of Amaury slightly smiling with glasses in the woods, and wearing a blue jacket."></img>
      </div>
    </div>
        <EverythingContainer />
    </div>

    </>
  );
}

export default App;
