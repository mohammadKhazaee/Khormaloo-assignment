import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import NextPage from "./components/NextPage";
import logo from "./logo.svg";
// import "./App.css";
import { EditPage } from "./pages/EditPage";
import { FirstPage } from "./pages/FirstPage";
import { FormCard } from "./components/FormCard";

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <Router>
        <Header />
        <FirstPage />

        <Routes>
          <Route path="/EditPage" element={<EditPage />} />
          <Route path="/nextPage" element={<NextPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
