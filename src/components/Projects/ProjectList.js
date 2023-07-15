import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";
import { DummyImage } from 'react-simple-placeholder-image'

function ProjectList() {
    
    const [data, setData] = useState([]);

    const url_get_all = API_URL+"/api/projects";

    useEffect(() => { 
        getAll()
    }, []);
    

    function getAll() {
    
    axios.get(url_get_all)
      .then((response) => {
        setData(response.data.data)
      })
    }


   return (
       <div class="flex flex-col">

<div class="container">



        <div class="row">
            <div class="row pt-5 pb-5 ">
                <h1>Proyectos realizados</h1>
            </div>
            
            {data.map((projects, index) => (
            
            <a href={`/projects/${projects.id}`} class="nothing col-log-6 col-md-3 col-12">
                <div class="card shadow-lg m-3 courses" key={index}>
                <DummyImage className="imageCard" bgColor='#0a1929' fgColor='aqua' />
                <div class="card-body">
                    <h5 class="card-title">{` ${projects.name}`}</h5>
                    <p class="card-text">{` Fecha de realización: ${projects.creation_date}`}</p>
                </div>
                </div>
            </a>
            ))}
        </div>
    </div>

       </div>
   )
}
 
export default ProjectList;