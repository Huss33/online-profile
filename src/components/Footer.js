import React from 'react';

function Footer() {

  const icons = [
    {
      name: "GitHub",
      link: "https://github.com/Huss33"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alexander-huss-8bba5910b/"
    },
    // {
    //   name: , 
    //   link: 
    // }
  ]

  return (
    <footer className="flex-row px-1">
      <p className="flex-row px-1">Click to view profiles:</p>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">{icon.name}</a>
      )
      )}
    </footer>
  );
}

export default Footer;