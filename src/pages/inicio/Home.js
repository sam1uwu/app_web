import React, { useState, useEffect } from "react";

import Axios from "../../services/Axios";


export function Home() {

  const [datos, setDatos] = useState([]);

  const consultar=async()=>{
    const consultaDatos=await Axios.get("/deptos");
    setDatos(consultaDatos.data)
  }

  useEffect(() => {
    consultar()
  }, [])
  
  
  return (
    <>
    <p>
      <div class="container text-center">
        <div className="row">
          <div class="btn-group" role="group" aria-label="Basic example-col-sm-3">
   
            <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseExample1" role="tab" aria-expanded="false" aria-controls="collapseExample1">
              <h2>Edificio A</h2>
            </a>
            <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseExample2" role="tab" aria-expanded="false" aria-controls="collapseExample2">
              <h2>Edificio B</h2>
            </a>
            <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseExample3" role="tab" aria-expanded="false" aria-controls="collapseExample3">
              <h2>Edificio C</h2>
            </a>
            <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseExample4" role="tab" aria-expanded="false" aria-controls="collapseExample4">
              <h2>Edificio D</h2>
            </a>
          </div>
        </div> 
      </div>
    </p>


    <div class="collapse" id="collapseExample1">
        <div class="card card-body">

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  DEPARTAMENTO #1
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                {datos.map((dato)=>{
              return(
                <div>
                {dato.nombre}
                </div>
              )
})}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        Menus
      </div>
    </div>

    


   
    </>

  );
}
