import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts";
import { Home, Footer, formAlumno, FormPersonas, AdminDepto } from '../pages';

export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   <Routes>
    
    <Route path='/' element={loadLayouts(Layout, Home)}/>
    <Route path='/alumno' element={loadLayouts(Layout, formAlumno)}/>
    <Route path='/departamento' element={loadLayouts(Layout, AdminDepto)}/>
    <Route path='/formpersona' element={loadLayouts(Layout, FormPersonas)}/>
    
   </Routes> 
  )
}
