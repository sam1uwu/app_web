import React, { useState } from "react";
import Axios from "../../../services/Axios";

export function FormPersonas() {

  const variables={
    
    id_depto:"",
    nombre:"",
    encargado:"",
    edificio:"",
    telefono:""
  }

  const [personas, setPersonas] = useState(variables);

  const onChange=(e)=>{
    const {name,value}=e.target;
    setPersonas({...personas,[name]:value})
  }

  const GuardarDatos=async()=>{
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post('/persona',personas).then(()=>{
      console.log("Registros guardados")
    })
   console.log(personas);
  }

  const Enviar=(e)=>{
    e.preventDefault();
    GuardarDatos();
  }
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
                  value={personas.curp}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre del departamento"
                  value={personas.nombre}
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
                  value={personas.apellidos}
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
                  value={personas.sexo}
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
                  value={personas.telefono}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
