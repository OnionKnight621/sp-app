import React, { Component } from 'react';

//Loader wrapper
export const Loader = ({loading, children}) => {
    const loader = (
      <h1 align="center" className="loader">
        Loading...
      </h1>
    )
  
    return(
      // aria-busy - element attribute that says if the element and it`s subtree are updating
      <div aria-busy={loading}>
        <br/><br/>
        {loading ? loader : children}
        <br/><br/>
      </div>
    )
}