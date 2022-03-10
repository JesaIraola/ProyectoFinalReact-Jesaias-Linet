import React, {useEffect, useState } from 'react';
import MaterialTable from 'material-table';

function Nosotros(){
  const columnas=[
    {
      title:'Nombre',
      field:'autor'
    },
    {
      title:'Apellidos',
      field:'apellidos'
    },
    {
      title:'Gmail',
      field:'gmail'
    }
  ];

  const data=[
    {autor:'Linneth', apellidos: 'Meneses', gmail:'linnethmenesestomas@gmail.com'},
    {autor:'Jesaias', apellidos: 'Iraola', gmail:'jesairaola@gmail.com'}
  ];
  return(
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={columnas}
        data={data}
        align="center"
        title="Acerca de:"
        />
    </div>
  );
}
export default Nosotros;