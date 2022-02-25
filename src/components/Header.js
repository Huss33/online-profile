import React from 'react';
import backgroundImage from '../Images/backgroundImage.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Lernantino</h1>
      <img src={backgroundImage} alt="carbon-blue background"></img>
      {props.children}
    </header>
  );
}

export default Header;