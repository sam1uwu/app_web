import React, { useState, useEffect } from "react";
import Axios from "../../../services/Axios";
import {useNavigate, useParams} from "react-router-dom";


//usar la navegacion por defecto del reat_router-dom
//const navigate =new useNavigate;
// usar useNAvigate como parametro en react-router-dom

export function FormPersonas() {

  const variables={
    _id:"",
    id_depto:"",
    nombre_depto:"",
    encargado:"",
    edificio:"",
    telefono:""
  }

  const [deptos, setDeptos] = useState(variables);
//variable para obtener los datos del parametro especificado en registro
  const params = useParams();
    const navigate=useNavigate()
  const onChange=(e)=>{
    const {name,value}=e.target;
    setDeptos({...deptos,[name]:value})
  }

  const GuardarDatos=async()=>{
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post('/depto',deptos).then(()=>{
      console.log("Registros guardados")
    })
   console.log(deptos);
  }

  const obtenerDepto=async(id)=>{
    const depto = await Axios.get("/deptos/" + id);
    setDeptos (depto.data);
    console.log(depto);
  }

  const updateDepto = async()=>{
    await Axios.patch(`/depto/${params.id}`, deptos).then(
      ()=>{
        console.log("Los datos han sido actualizados correctamente")
      }
    )
    navigate("/depto");
  }
  

  const Enviar=(e)=>{
    e.preventDefault();
    GuardarDatos();
  }

  useEffect(()=>{
    obtenerDepto(params.id);
  },[params.id])

  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Datos de modulo</div>
        <div class="card-body">
          <form class="row g-3" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="id_depto" class="col-sm-2 col-form-label">
                ID Departamento
              </label>
              <div class="col-sm-10">
                <input
                name="id_depto"
                  type="text"
                  class="form-control"
                  id="id_depto"
                  placeholder="Ingrese ID del departamento"
                  value={deptos.id_depto}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="nombre_depto" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre_depto"
                  id="nombre_depto"
                  placeholder="Nombre del departamento"
                  value={deptos.nombre_depto}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="encargado" class="col-sm-2 col-form-label">
                Encargado
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="encargado"
                  id="encargado"
                  placeholder="Nombre del encargado"
                  value={deptos.encargado}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="edificio" class="col-sm-2 col-form-label">
                Edificio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="edificio"
                  id="edificio"
                  placeholder="A, B, C, ó D"
                  value={deptos.edificio}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Teléfono
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingrese numero de telefono"
                  value={deptos.telefono}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                {deptos._id==="" ? "Guardar":"Actualizar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
