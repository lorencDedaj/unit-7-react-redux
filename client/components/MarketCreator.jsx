/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from "react";
//add a button and an input bar
// import MarketsContainer from "../containers/MarketsContainer";

const MarketCreator = (props) => (
  <div>
    <h3>Create new Market</h3>
    {/* <button onClick={props.handleMarket(location)}></button> */}
    <form
      method='post'
      action=''
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(e);
        props.handleMarket(location);
      }}
    >
      <label htmlFor='text'>Location</label>
      <input type='text' id='input-location' name='location' />
      <input type='submit' value='Add Market' />
    </form>
  </div>

  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
);

// function submitHandler(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const location = formData.get('location');
//   console.log(location);
//   addMarket(location);
// }
//   // const inputField = e.target.querySelector('input[type="text"]');
//   // console.log(inputField.value);
export default MarketCreator;
