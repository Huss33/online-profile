import React from 'react';
import ProfilePic from '../../Images/ProfilePic.jpg';

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <img src={ProfilePic} alt="profile picture"></img>
      <p>
        Alex recently finished a coding bootcamp at the University of Minnesota. Alex is somewhat new to 
      coding but not new to computers. I am very familiar with the interworkings of computers, having built my 
      own in December of 2020. I enjoyed building my computer so much so, that it inspired me to learn more 
      about how to use a computer to it's fullest and build a career out of it. I plan to continue my education
      after graduating from this bootcamp, by taking the full month of free courses offered by the University.
      From there I will have some investigating to do, but I have no doubt that there is a wealth of knowledge
      waiting for me out there. As for what I have done so far? I have included below some of my favorite 
      projects and activities to browse. 
      </p>
      <p>
      Current info, current education or job, current projects or work, Alex was born in St. Paul, Minnesota and after 
      moving around the Twin Cities quite a bit over the last 20 years, has finally landed in Edina, Minnesota where
      he has been for the last five years. (This section is unfinished and this portfolio is unfinished) 
      </p>
    </div>
  );
}
