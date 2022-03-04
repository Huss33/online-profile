import React from 'react';


function MyWork({ myWork }) {

  const { title, liveLink, github, source, gitLink } = myWork;

  return (
    <div className="project" key={title}>
      <img
        src={source} 
        alt={title}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={liveLink}>{title}</a>{' '}
          <a href={github}>{gitLink}
            <i className="fab fa-github"></i>
          </a>
        </h3>
      </div>
    </div>
  );
}

export default MyWork;