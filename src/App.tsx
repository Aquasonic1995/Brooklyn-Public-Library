import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Welcome/Welcome";
import About from "./Components/About/About";
import Favorites from "./Components/Favorites/Favorites";
import CoffeeShop from "./Components/Coffee Shop/CoffeeShop";
import OurContacts from "./Components/Our Contacts/OurContacts";
import DigitalLibraryCards from "./Components/DigitalLibraryCards/DigitalLibraryCards";
import Footer from "./Components/Footer/Footer";
import s from "./Components/Header/Header.module.scss";

function App() {

  return (
     <>
      <Header />
      <main>

        <Welcome />
        <div className="container">
          <About />
          <Favorites />
          <CoffeeShop />
          <OurContacts />
          <DigitalLibraryCards />
        </div>
      </main>
      <Footer />
</>
  );
}

export default App;
