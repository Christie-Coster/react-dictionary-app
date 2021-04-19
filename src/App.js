import React from "react";
import './App.css';
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
        <h1 className="App-header"> 
          <strong>
          Dictionary 
          </strong>
        </h1>
        <h3>
          Enter a word that you would like to search for
        </h3>
        <Dictionary />
      <Footer />
    </div>
  );
}

