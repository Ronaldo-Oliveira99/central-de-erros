import React from "react";


function SelAmbient({ opcao1, opcao2, opcao0,opcao3,opcao4, onChange}) {
  return (

  <div className="col-12 col-sm-4 col-md-4 col-lg-3 ms-lg-4">
    <label htmlFor="ambiente">Ambiente</label>
    <select onChange={onChange} className="form-select form-select-sm " id="ambiente">
      <option value={0}>{opcao0}</option>
      <option value={1}>{opcao1}</option>
      <option value={2}>{opcao2}</option>
      <option value={3}>{opcao3}</option>
      {/* <option value={4}>{opcao4}</option> */}
    </select>
  </div>
  
  );
}

function SelOrdenar({ opcao0, opcao1, opcao2, onChange}) {
  return (

    <div className="col-12 col-sm-4 col-md-4 col-lg-2">
      <label htmlFor="ordenar">Ordenar Por:</label>
      <select onChange={onChange} className="form-select form-select-sm" id="ordenar">
        <option value={0}>{opcao0}</option>
        <option value={1}>{opcao1}</option>
        <option value={2}>{opcao2}</option>
      </select>
    </div>
  );
}


function SelBuscar({ opcao0,opcao1, opcao2, opcao3, onChange }) {
  return (
    <div className="col-12 col-sm-4 col-md-4 col-lg-2">
      <label htmlFor="buscar">Buscar Por:</label>
        <select onChange={onChange} className="form-select form-select-sm" id="buscar">
        <option value={0}>{opcao0}</option>
        <option value={1}>{opcao1}</option>
        <option value={2}>{opcao2}</option>
        <option value={3}>{opcao3}</option>
      </select>
    </div>
  );
}

export  {SelAmbient,SelOrdenar,SelBuscar}
