import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";


const ProjectView = () =>{

    const [data, setData] = useState([]);

    useEffect(() => {

        getProject()
    
      }, []);
    
      const id = useParams();

      function getProject() {
          axios.get(API_URL+"/api/projects/"+id.id)
          .then((response) => {
            setData(response.data.data)
            
          });
      }
      console.log(data)

 
  return (



    <div className="container">
        {
                            <div class="row">
            <div class="card shadow-lg m-3 courses" key={data.id}>
              <div class="card-body">
                <h2 class="card-title">{` ${data.name}`}</h2>
                <h3 class="card-title">{`El proyecto fue creado por ${data.name}`}</h3>
                <h4 class="card-title">{`Ttipo de proyecto: ${data.type}`}</h4>
                <h5 class="card-title">Consulta el proyecto aquí: <a href={data.repository_link}>{data.repository_link}</a></h5>
    
              </div>
            </div>
          </div>
        }
     


    </div>
  );
}


export default ProjectView;