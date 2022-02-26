import React, { useState } from "react";
import Header from "./components/Header";
import NavLink from "./components/NavLink";
import DisplayPage from "./components/DisplayPage";
import Footer from "./components/Footer";

function App() {
  const [DisplayPages] = useState([
    {
      name: "About Me"
    },
    { name: "My Portfolio" },
    { name: "Contact Me" },
    {
      name: "My Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(DisplayPages[0]);

  return (
    <div>
      <Header>
        <NavLink
          DisplayPages={DisplayPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></NavLink>
      </Header>
      <main>
        <DisplayPage currentPage={currentPage}></DisplayPage>
      </main>
      <Footer />
    </div>
  );
}

export default App;