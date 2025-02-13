import React, { useState } from "react"; 
import Home from "./pages/home.jsx";
import Recipes from "./pages/recipes";
import Favorites from "./pages/favorites";
import About from "./pages/about";
import Contact from "./pages/contact.jsx";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); 

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "recipes":
        return <Recipes />;
      case "favorites":
        return <Favorites />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>DishDelights</h1>
        <nav>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("recipes")}>Delight Recipes</button>
          <button onClick={() => setCurrentPage("favorites")}>Favorites</button>
          <button onClick={() => setCurrentPage("about")}>About us</button>
          <button onClick={() => setCurrentPage("contact")}>Contact us</button>
        </nav>
      </header>
      <main>{renderPage()}</main>
      <footer>
        <p>&copy; 2025 DishDelights. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
