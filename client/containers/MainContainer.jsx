/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React from "react";
import { useSelector } from "react-redux";
// import from child components...
import TotalsDisplay from "../components/TotalsDisplay.jsx";
// import MarketsDisplay from "../components/MarketsDisplay.jsx";
import MarketsContainer from "../containers/MarketsContainer.jsx";

const MainContainer = () => {
  // add pertinent state here

  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>MegaMarket Loyalty Cards</h1>
        {/* Start adding components here... */}
        <TotalsDisplay />
        {/* <MarketsDisplay /> */}
        <MarketsContainer />
      </div>
    </div>
  );
};

export default MainContainer;
