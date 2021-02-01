import React from "react";
import styled from "styled-components";

const LoadingComponent = styled.p`
  text-align: center;
  margin: 50px;
  color: black;
`;

function Loading() {
  return (
    <tbody>
      <tr>
        <th scope="row" className="align-middle">
          
        </th>

        <td className="align-middle"></td>
        <td className="align-middle">
          <div className="text-center">
            <LoadingComponent>Loading...</LoadingComponent>
          </div>
        </td>
        <td className="align-middle text-center"></td>
      </tr>
    </tbody>
  );
}

export default Loading;
