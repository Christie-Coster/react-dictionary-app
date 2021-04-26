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
        <Dictionary defaultKeyword= "Welcome"/>
      <Footer />
    </div>
  );
}

