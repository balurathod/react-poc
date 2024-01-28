import React  from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Main.css";
import NavBar from "./components/Navbar/Navbar";
// import AutoSearch from "./components/autoSearch/AutoSearch";
// import TextForm from "./components/TextForm/TextForm";

export default function App() {

   return (
    <div className="App" data-testid='app-1'>
      <Router>
        <NavBar />
        <div className="container mt-4">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
    </Router>
      {/* <AutoSearch />
      <TextForm />  */}
    </div>
    );
  }
