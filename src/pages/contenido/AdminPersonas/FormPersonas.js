import React, { useState, useEffect } from "react";
import Axios from "../../../services/Axios";
import {useNavigate, useParams} from "react-router-dom";


//usar la navegacion por defecto del reat_router-dom
//const navigate =new useNavigate;
// usar useNAvigate como parametro en react-router-dom

export function FormPersonas() {

  const variables={
    _id:"",
    //para datos del departamento
    id_depto:"",
    name_depto:"",
    edificio:"",
    telefono_depto:"",
    email_depto:"",
    //para datos del administrador del depto
    id_admi:"",
    name_admi:"",
    sexo:"",
    telefono_admi:"",
    email_admi:""
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
  <div class="card-body">
    
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Datos de Departamento</div>
        <div class="card-body">
          <form class="row g-3" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="id_depto" class="col-sm-2 col-form-label">
                ID
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
              <label for="name_depto" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="name_depto"
                  id="name_depto"
                  placeholder="Nombre del departamento"
                  value={deptos.name_depto}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="mb-3 row">
            <select class="form-select" aria-label="Default select example">
              <option selected>Selecione edificio</option>
              <option value="1">Edificio A</option>
              <option value="2">Edificio B</option>
              <option value="3">Edificio C</option>
              <option value="4">Edificio D</option>
              <option value="5">Biblioteca</option>
              <option value="6">Laboratorio</option>
            </select>
            </div>

            <div class="mb-3 row">
              <label for="telefono_depto" class="col-sm-2 col-form-label">
                Teléfono
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono_depto"
                  id="telefono_depto"
                  placeholder="Telefono del departamento"
                  value={deptos.telefono_depto}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="email_depto" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="email_depto"
                  id="email_depto"
                  placeholder="correo del departamento"
                  value={deptos.email_depto}
                  onChange={onChange}
                />
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>

        <div className="container-fluid p-3">
          <div class="card">
            <div class="card-header">Datos de administrador</div>
            <div class="card-body">
              <form class="row g-3" onSubmit={Enviar} id="personales">
              <div class="mb-3 row">
                <label for="id_admi" class="col-sm-2 col-form-label">
                  ID
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="id_admi"
                    id="id_admi"
                    placeholder="ingrese matricula de administrados"
                    value={deptos.id_admi}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="name_admi" class="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="name_admi"
                    id="name_admi"
                    placeholder="Ingrese nombre de administrador"
                    value={deptos.name_admi}
                    onChange={onChange}
                  />
                </div>
              </div>
              
              <div class="mb-3 row">
                <label for="sexo" class="col-sm-2 col-form-label">
                  Sexo
                </label>
                  
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label 
                  class="form-check-label" for="inlineRadio1">
                    Mujer
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label 
                  class="form-check-label" for="inlineRadio2">
                    Hombre
                  </label>
                </div>
                </div>
              
              <div class="mb-3 row">
                <label for="telefono_admi" class="col-sm-2 col-form-label">
                  Teléfono
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="telefono_admi"
                    id="telefono_admi"
                    placeholder="Telefono del administrador"
                    value={deptos.telefono_admi}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="email_admi" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    name="email_admi"
                    id="email_admi"
                    placeholder="Correo del administrador"
                    value={deptos.email_admi}
                    onChange={onChange}
                  />
                </div>
              </div>
              </form>      
            </div>
          </div>
        </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              {deptos._id==="" ? "Guardar":"Actualizar"}
            </button>
          </div>
  </div>
  </div>
  </div>

  );
}
