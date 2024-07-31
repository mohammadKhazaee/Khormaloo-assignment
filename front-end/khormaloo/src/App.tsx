import React from "react";
import Header from "./components/Header";
import logo from "./logo.svg";
// import "./App.css";
import { EditPage } from "./pages/EditPage";

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <Header />
      <EditPage />
    </div>
  );
}

export default App;
