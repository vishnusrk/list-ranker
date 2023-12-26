/*
Vishnu Sreekanth

List Ranker

ResetButton.js

This is the file for the ResetButton component, which clears the list entry box
and terminates the current ranking process upon click, completely resetting the 
page.
*/

import React from 'react';
import './App.css';

/*
ResetButton is a class component, with no state or props. It just renders the 
reset button on the page.
*/

class ResetButton extends React.Component {

    /*
    Render function, which defines what should be rendered as the component.
    */
   
    render() {
  
      return (
        <center>
          <button className="resetButton" 
                  onClick={() => window.location.reload()}>
            Reset
          </button>
        </center>
      );
  
    }
  
}

export default ResetButton;