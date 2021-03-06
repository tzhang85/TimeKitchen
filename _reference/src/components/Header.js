//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';


//const color = Math.random() > 0.5 ? 'green' : 'red';
const Header = (props) => {
  return (
      <h2 className = "Header text-center">
        {props.message}
      </h2>
  );
};

Header.propTypes = {
  //isRequired will evoke warnings if the headerMessage is not assigned
    message : PropTypes.string
};

export default Header;
