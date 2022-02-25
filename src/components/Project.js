import React from 'react';

function Project({ project }) {

  const { title, repo, link } = project;

  return (
    <div className="project" key={title}>
      <img
        src={require(`../Images/${title}.jpg`)}
        alt={title}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{title}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Project;