import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import {Link, useNavigate} from "react-router-dom";


export function Home() {
  const [datos, setDatos] = useState([]);

  const navigate = new useNavigate();

  const consultar=async()=>{
    const consultaDatos=await Axios.get("/deptos");
    setDatos(consultaDatos.data)
  }

  const deleteDepto = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar este departamento?")) {
      const eliminar = await Axios.delete("/depto/" + id);
    }
    consultar();
  };

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
            <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseExample4" role="tab" aria-expanded="false" aria-controls="collapseExample4">
              <h2>Biblioteca</h2>
            </a>
            <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseExample4" role="tab" aria-expanded="false" aria-controls="collapseExample4">
              <h2>Laboratorio</h2>
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
                {datos.map((dato)=>{
              return(
                <div>
                {dato.nombre_depto}
                </div>
                )})}

                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> 
                {datos.map((dato)=>{
              return(
                <div>
                <tr>
                    <th scope="row">1</th>
                    <td>{dato.ID_depto}</td>
                    <td>{dato.name_depto}</td>
                    <td>{dato.telefono_depto}</td>
                    <td>{dato.email_depto}</td>
                    <td>
                      <button type="button" 
                      class="btn btn-info"
                      onClick={()=>navigate(`/formpersona/${deptos._id}`)}
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger"
                      onClick={()=>deleteDepto(deptos._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </div>
                )})}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>



    </>

  );
}
