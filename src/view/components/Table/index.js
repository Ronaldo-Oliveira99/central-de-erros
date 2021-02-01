import React from "react";
import { Link } from "react-router-dom";

export function TableBody({
  onChange,
  isChecked,
  level,
  descricao,
  origem,
  date,
  eventos,
  ambients
}) {
  return (
    <tbody>
      
      <tr>
        <th scope="row" className="align-middle">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            ></input>
        </th>

        <td className="align-middle">
          <p>{level} </p>
        </td>
        <td className="align-middle">
         <Link to={`home/${ambients}`} className="text-decoration-none text-reset">
          <div className="text-center ">
            <p className="m-1 col-9 d-inline-block text-truncate"> {descricao}</p>
            <p className="m-1 "> {origem}</p>
            <p className="m-1"> {date}</p>
          </div>
       </Link>
        </td>
        <td className="align-middle text-center">
          <p>{eventos} </p>
        </td>
      </tr>
    </tbody>
  );
}

export function TableHead({ onChangeHead, isChecked }) {
  return (
    <thead>
      <tr>
        <th scope="col">
          <input
            type="checkbox"
            onChange={onChangeHead}
            checked={isChecked}
          ></input>
        </th>

        <th scope="col" className="text-start col-2">
          LEVEL
        </th>

        <th scope="col" className="text-center">
          LOG
        </th>

        <th scope="col" className="text-end col-2">
          EVENTOS
        </th>
      </tr>
    </thead>
  );
}
