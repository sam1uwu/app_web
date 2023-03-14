import React from 'react';
import {Menu} from "../components/menu"



export function Layout(props) {
  const {children}=props;
  return (
    <>
    <div>
      <Menu/>
    </div>
    <div>
      {children}
    </div>
    </>
  )
}
