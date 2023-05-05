import React from 'react';
import {Link} from "react-router-dom";


export function Menu() {
  return (
    <>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <nav class="navbar bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="#">
            <img src="https://sic.cultura.gob.mx/imagenes_cache/universidad_1874_g_10230.png" alt="..." width="50" height="50"/></a>
          </div>
        </nav>
        <h5 class="navbar-brand" href="#">UbicaTec</h5>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formpersona">Registro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</>
  )
}

