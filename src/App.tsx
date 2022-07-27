import React from 'react';

import './App.css';
import BackgroundImages from './Components/BackgroundImages'
import EverythingContainer from './Components/EverythingContainer';

function App() {

  return (
    <>
    <div id="backgroundImagesInAppContainer">
      <BackgroundImages />
    </div>


    <div id="EverythingContainerInAppContainer">
    <div id="profilePictureContainer">
      <img id="profilePicture"src="https://i.imgur.com/w6OLIjo.jpg"></img>
    </div>
        <EverythingContainer />
    </div>

    </>
  );
}

export default App;
