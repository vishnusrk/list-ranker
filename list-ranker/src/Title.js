/*
Vishnu Sreekanth

List Ranker

Title.js

This is the file for the Title component, which consists of the page's 
header and main title at the top.
*/

import React from 'react';
import './App.css';

/*
Title is a class component. It does not have any props and state, and just 
renders the page's header and its main title. 
*/

class Title extends React.Component {
  
    /*
    Render function, which defines what should be rendered as the component.
    */

    render() {
  
      return (
        <div>
          <div className="mainHeader">
            <h2 className="headerLogo">List Ranker</h2>
          </div>
          <div className="mainTitle">
            <center>
              <h1>List Ranking Tool</h1>
            </center>
          </div>
        </div>
      );
  
    }
  
}

export default Title;