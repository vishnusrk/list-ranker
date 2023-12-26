/*
Vishnu Sreekanth

List Ranker

InstructionsAndInfo.js

This is the file for the InstructionsAndInfo component, which consists of the 
instructions for the list ranking tool and some additional info.
*/

import React from 'react';
import './App.css';

/*
InstructionsAndInfo is a class component, with no state or props. It just 
renders the instructions and info on the page.
*/

class InstructionsAndInfo extends React.Component {

    /*
    Render function, which defines what should be rendered as the component.
    */
   
    render() {
  
      return (
        <div className="instructions">
          <h1>Instructions</h1>
          <p>
            Do you have a long list of items which you need to rank? Say no 
            more! This tool makes the ranking process simpler by presenting two 
            items in your list at a time for you to choose between. To begin, 
            enter your list of items in the text field, <strong>with each item 
            on a separate line</strong>, and then click Enter. You will then 
            be presented with two buttons, each with an item from your list. 
            Simply select which out of the two items you would rank higher, and 
            keep doing this until your ranked list appears! If you wish to 
            restart, click Reset, but please note that once you do, none of 
            your progress will be saved here.
          </p>
          <h1>About</h1>
          <p>
            This list ranking tool was made by Vishnu Sreekanth using React 
            JSX and CSS.
          </p>
        </div>
      );
  
    }
  
}

export default InstructionsAndInfo;