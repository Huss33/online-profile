import React, { useState } from 'react';
import MyWork from "../MyWork";

function Portfolio() {

  const [myWorks] = useState([
    {
      name: 'Project1-Bands-and-Brews',
      liveLink: "https://leodickenson.github.io/Project_1_uofm/",
      github: "https://github.com/LeoDickenson/Project_1_uofm"
    },
    {
      name: 'Password-Generator',
      liveLink: "https://huss33.github.io/Password-Generator/",
      github: "https://github.com/Huss33/Password-Generator"
    },
    {
      name: 'E-Commerce-Back-End',
      liveLink: "https://watch.screencastify.com/v/i0YiOzJUx4YcRUWqxZUv",
      github: "https://github.com/Huss33/E-Comerce-Back-End"
    },
    {
      name: 'Project2-SNA',
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