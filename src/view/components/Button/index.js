import React from "react";

function Buttons({ deleteHandler, arquivarHandler}) {
  return (
   <div className="m-3">

     <button onClick={arquivarHandler}  className="btn btn-primary m-2">Arquivar</button>
     <button onClick={deleteHandler} className="btn btn-warning">Apagar</button>

   </div>
     
  );
}


export default Buttons ;
