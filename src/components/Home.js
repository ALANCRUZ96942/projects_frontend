import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DummyImage } from 'react-simple-placeholder-image'
import Swal from "sweetalert2";
import ProjectList from "./Projects/ProjectList";


function Home() {




  return (



    <div class="container">
      <div class="row pt-5 pb-5 ">
        
        <ProjectList/>
      </div>
    </div>
  );
}


export default Home;