import React, { Component } from 'react'
import PropTypes from 'prop-types';



function Header() {
  return(
    <div>
      <h1>{props.branding}</h1>  
    </div>
  )
};


Header.defaultProps= {
  branding: "My App Without Props Passed"
};
Header.propTypes ={
  branding: PropTypes.string.isRequired
};

export default Header;