import React, { useState } from 'react';
import MyWork from "../MyWork";
import eComBack from '../../Images/E-Commerce-Back-End.jpg'
import bAndB from '../../Images/Project1-Bands-and-Brews.jpg'
import passGen from '../../Images/Password-Generator.jpg'
import sNA from '../../Images/Project2-SNA.jpg'


function Portfolio() {

  const [myWorks] = useState([
    {
      title: 'Project1-Bands-and-Brews /',
      gitLink: 'Code Repo',
      source: bAndB,
      liveLink: "https://leodickenson.github.io/Project_1_uofm/",
      github: "https://github.com/LeoDickenson/Project_1_uofm"
    },
    {
      title: 'Password-Generator /',
      gitLink: 'Code Repo',
      source: passGen,
      liveLink: "https://huss33.github.io/Password-Generator/",
      github: "https://github.com/Huss33/Password-Generator"
    },
    {
      title: 'E-Commerce-Back-End /',
      gitLink: 'Code Repo',
      source: eComBack,
      liveLink: "https://watch.screencastify.com/v/i0YiOzJUx4YcRUWqxZUv",
      github: "https://github.com/Huss33/E-Comerce-Back-End"
    },
    {
      title: 'Project2-SNA /',
      gitLink: 'Code Repo',
      source: sNA,
      liveLink: "https://stormy-garden-90236.herokuapp.com/",
      github: "https://github.com/Huss33/Project_2_uofm"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {myWorks.map((myWork, idx) => (
          <MyWork
          myWork={myWork}
            key={"myWork" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;