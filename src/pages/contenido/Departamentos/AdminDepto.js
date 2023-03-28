import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";

import { Link } from "react-router-dom";

export function AdminDepto() {
  
  const [depto, setDepto] = useState([]);

  const consultarDepto = async () => {
    const consultar = await Axios.get("/depto");
    console.log(consultar.data)
    setDepto(consultar.data);
  };

  const GuardarDeptos=async()=>{
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post('/depto',depto).then(()=>{
      console.log("Registros guardados")
    })
   console.log(depto);
  }

  const deleteDepto = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar a la el departamento?")) {
      // eslint-disable-next-line no-unused-vars
      const eliminar = await Axios.delete("/depto/" + id);
    }
    consultarDepto();
  };

  useEffect(() => {
    consultarDepto();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h1>Administración de departamento</h1>
      </div>
      <div class="container text-center">
        <div class="row row-cols-4">
          <div class="col-md-3">
            <button type="button" class="btn btn-primary">
              <Link class="dropdown-item" to="/formpersona">
                Agregar departamento...
              </Link>
            </button>
          </div>
        </div>
        <div class="row row-cols-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Encargado</th>
                <th scope="col">Telefono</th>
                <th scope="col">Editar</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {depto.map((depto) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{depto.id}</td>
                    <td>{depto.nombre}</td>
                    <td>{depto.encargado}</td>
                    <td>{depto.telefono}</td>
                    <td>
                      <button type="button" class="btn btn-info">
                        Editar
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger"
                      onClick={()=>deleteDepto(depto._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
