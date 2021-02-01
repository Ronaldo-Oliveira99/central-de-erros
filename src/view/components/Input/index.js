import React from "react";
//import styled from "styled-components";

function Input({ onChange, validInput }) {
  var border = "";
  validInput ? (border = "border border-danger") : (border = "");

  return (
    <div className="col-12 col-sm-8 col-md-8 col-lg-4">
      <label htmlFor="inputBuscar">Pesquisar</label>
      <input
        className={`form-control form-control-sm ${border}`}
        type="text"
        placeholder="Search..."
        onChange={onChange}
        id="inputBuscar"
      />
      {validInput ? (
        <small id="passwordHelpBlock" className="text-danger">
          Selecione um tipo de busca
        </small>
      ) : (
        <small></small>
      )}
    </div>
  );
}

export default Input;
