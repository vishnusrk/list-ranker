/*
Vishnu Sreekanth

List Ranker

App.js

This is the primary file of my List Ranker project. It has one function, 
aptly named App, that is responsible for rendering the page. The index.js 
file that is in this same folder renders the App component onto the 
webpage, displaying it inside the 'root' DOM node in the index.html file.
*/

import React from 'react';
import './App.css';
import Title from './Title.js';
import ListEntryBox from './ListEntryBox.js';
import ResetButton from './ResetButton.js';
import InstructionsAndInfo from './InstructionsAndInfo.js';

/*
App is a function component. It renders the following, in order: a Title 
component, a ListEntryBox component, a ResetButton component, and an 
InstructionsAndInfo component, all of which are imported above.
*/

function App() {

  return (
    <div>
      <Title />
      <ListEntryBox />
      <ResetButton />
      <InstructionsAndInfo />
    </div>
  );

}

export default App;
