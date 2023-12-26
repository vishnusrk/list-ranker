/*
Vishnu Sreekanth

List Ranker

ListEntryBox.js

This is the file for the ListEntryBox component, which renders the text 
field that the unranked list is to be entered into. It also renders the 
enter button that is to be clicked after the list is entered, along with the 
ChoiceButtons component, which renders two buttons with items from the list 
for the user to choose between during the ranking process.
*/

import React from 'react';
import './App.css';
import ChoiceButtons from './ChoiceButtons.js';

/*
ListEntryBox is a class component. It does not have any props, but has one 
state attribute, enterButtonClicked. This attribute keeps track of whether 
the enter button was clicked or not, and is checked in order to display the 
page accordingly.
*/

class ListEntryBox extends React.Component {

    /*
    Component constructor. Defines one state attribute, enterButtonClicked. 
    This attribute keeps track of whether the enter button was clicked or 
    not, and is checked in the render function to render the component 
    differently depending on whether it was clicked or not.
    */

    constructor(props) {
  
      super(props);
      this.state = {
        enterButtonClicked: false,
      };
  
    }

    /* 
    Render function. If the enter button has not been clicked, it only 
    displays the list entry box and the enter button. If it has been clicked, 
    but the getItemArray function returns null, a message prompting the user 
    to enter a non-empty list with no empty items is displayed below the enter 
    button. If it has been clicked and an array with all the items was 
    successfully returned by getItemArray, the ChoiceButtons component is 
    displayed below the enter button.
    */  

    render() {
  
      if (!this.state.enterButtonClicked) {
        return (
          <div>
            <center>
              <textarea id="entryBox"></textarea>
            </center>
            <div className="textControlButtonPanel">
              <center>
                <button className="enterButton" 
                        onClick={() => this.handleClick()}>
                  Enter
                </button>
              </center>
            </div>
          </div>
        );
      } else if (this.getItemArray() === null) {
        return (
          <div>
            <center>
              <textarea id="entryBox"></textarea>
            </center>
            <div className="textControlButtonPanel">
              <center>
                <button className="enterButton" 
                        onClick={() => this.handleClick()}>
                  Enter
                </button>
              </center>
            </div>
            <center>
              <h2>
                Please enter a list to be ranked. Please make sure that 
                there are no empty entries in your list.
              </h2>
            </center>
          </div>
        );
      } else {
        return (
          <div>
            <center>
              <textarea id="entryBox"></textarea>
            </center>
            <div className="textControlButtonPanel">
              <center>
                <button className="enterButton" 
                        onClick={() => this.handleClick()}>
                  Enter
                </button>
              </center>
            </div>
            <center>
              <div className="comparisonField">
                <center>
                  <ChoiceButtons items={this.getItemArray()}/>
                </center>
              </div>
            </center>
          </div>
        );
      }
  
    }

    /*
    Onclick function for the enter button. Updates the component's state by
    setting enterButtonClicked to true. If getItemArray successfully returns 
    an array of the items, it also makes the list entry box read-only.
    */
  
    handleClick() {
  
      if (this.getItemArray() !== null && this.getItemArray().length !== 0) {
        document.getElementById("entryBox").readOnly = true;
      }
      this.setState({enterButtonClicked: true});
  
    }

    /*
    Converts the list of items typed into the list entry box into an array. 
    Removes all trailing newlines from the string in the list entry box, 
    and then checks if the list is valid, returning null if it isn't. The list 
    is invalid if it is empty, has an item that is empty (when two or more 
    consecutive newlines are present), or has only one item (when 
    hasEnoughReturns returns false).  If the list is valid, it parses the 
    string in the list entry box and adds the items to the array, using the 
    newlines as delimiters up until the last item, where it uses the 
    increment variable of the loop by checking if it is equal to the length 
    of the entered list minus one. It then returns the array of items.
    */
  
    getItemArray() {
  
      let enteredList = document.getElementById("entryBox").value;
      /*
      Removes all trailing newlines from the string in the list entry box.
      */
      while (enteredList.charAt(enteredList.length - 1) === "\n") {
        enteredList = enteredList.substring(0, enteredList.length - 1);
      }
      let characterCounter = 0;
      let itemArray = [];
      /*
      Checks if the list is valid. If it is, the string is parsed and the 
      items are added to itemArray, which is returned. If not, null is 
      returned.
      */
      if (enteredList && this.hasEnoughReturns(enteredList) 
          && !enteredList.includes("\n\n")) {
            /*
            The variable characterCounter is used to keep track of the number 
            of characters in a list item, and is incremented whenever the 
            character at index i is not a newline. Whenever the character at 
            index i in the list entry box string is a newline, the substring 
            with starting index i - characterCounter and non-inclusive 
            terminating index i is added to the array, to parse the entire list 
            item without the newline. Since trailing newlines were removed at 
            the beginning of the function, this same paradigm is not used for 
            the final item of the list. For the final item, the first if 
            condition checks if i is at the length of the string - 1. If it is, 
            it adds the substring starting at (i + 1) - (characterCounter + 1) 
            to the array, since the character it is on is not a newline and is 
            a part of the item, and characterCounter has not been incremented 
            for this iteration.
            */
            for (let i = 0; i < enteredList.length; i++) {
              if (i === enteredList.length - 1) {
                itemArray.push(
                    enteredList.substring((i + 1) - (characterCounter + 1))
                );
              } else if (enteredList.charAt(i) !== "\n") {
                characterCounter++;
              } else {
                itemArray.push(enteredList.substring(i - characterCounter, i));
                characterCounter = 0;
              }
            }
            return itemArray;
      } else {
        return null;
      }
  
    }

    /*
    Makes sure that there are multiple items in the list by counting the 
    number of newlines in the string in list entry box. This is called after 
    all trailing newlines are removed. If there are no newlines, that means 
    only one item is in the list, and false is returned. Otherwise, true is 
    returned.
    */
  
    hasEnoughReturns(list) {
  
      let count = 0;
      for (let i = 0; i < list.length; i++) {
        if (list.charAt(i) === "\n") {
          count++;
        }
      }
      if (count < 1) {
        return false;
      } else {
        return true;
      }
  
    }
  
}

export default ListEntryBox;