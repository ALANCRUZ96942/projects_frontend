import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";



function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>


        {/* protected routes routes  */}
          <Route path="/" exact element={<Home />}></Route>



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
