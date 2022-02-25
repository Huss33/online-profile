import React from 'react';
import PageContent from './PageContent';
import MyPortfolio from './MyPortfolio';
import ContactMe from './ContactMe';
import MyResume from './MyResume';
import AboutMe from './AboutMe';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <AboutMe />;
      case 'portfolio':
        return <MyPortfolio />;
      case 'contact':
        return <ContactMe />;
      case 'resume':
        return <MyResume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;