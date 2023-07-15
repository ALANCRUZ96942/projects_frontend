import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

import ProjectCreate from "./components/Projects/ProjectCreate";
import ProjectEdit from "./components/Projects/ProjectEdit";
import ProjectView from "./components/Projects/ProjectView";



function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>


          <Route path="/projects/add" element={<ProjectCreate />} />
          <Route path="/projects/edit/:id" element={<ProjectEdit />} />

        {/* Public routes  */}
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/projects/:id" element={<ProjectView />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
