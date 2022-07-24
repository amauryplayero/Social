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
      <EverythingContainer />
      </div>

    </>
  );
}

export default App;
