import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../components/Filter";
import { Button, ButtonGroup } from "../components/Button";
import { TableBody, TableHead } from "../components/Table";
import { Card, CardHeader, CardBody } from "../components/Card";
import Loading from "../components/Loading";
import { formatDate } from "../../utils";
import api from "../../api";

function Home() {
  const dispatch = useDispatch();

  const { erroAmbient } = useSelector(({ erros }) => erros);
  const { loading } = useSelector(({ erros }) => erros);
  const { Checked } = useSelector(({ erros }) => erros);
  const { testeState } = useSelector(({ erros }) => erros);

  const [input, setInput] = useState("");

  useEffect(() => {
    api().then((datas) => {
      dispatch({ type: "GET_ERROS", datas });
    });
  }, [dispatch]);

  const handleSelected = (e) => {
    const valor = e.target.value;
    dispatch({ type: "SELECT_ERROS", valor });
  };

  const onCheck = (index) => {
    dispatch({ type: "CHECK_ERROS", index });
  };

  const deleteHandler = () => {
    dispatch({ type: "DELETE_ERROS", Checked });
  };

  const onHandleOrder = (e) => {
    const valor = e.target.value;
    console.log("valor", valor);
    dispatch({ type: "ORDENAR_FREQUENCIA", valor });
  };
  console.log("testeState", testeState);
  console.log("erroAmbient", erroAmbient);

  // const handleChangeInput = e => {
  //   const valorInput = e.target.value;
  //   // setInput(valorInput);
  //   dispatch({ type: "SEARCH_ERROS", valorInput });
  // };

  // console.log("erroList", erroList);

  return (
    <div>
      <Card>
        <CardHeader>
          <Filter
            onChangeLink={handleSelected}
            onChangeOrder={onHandleOrder}
            // onChangeInput={handleChangeInput}
          />
          {/* <p>
            {busca.map(item => (
              <li>item</li>
            ))}
          </p> */}
          <ButtonGroup>
            <Button>Arquivar </Button>
            <Button onClick={() => deleteHandler()}>Apagar</Button>
          </ButtonGroup>
        </CardHeader>
        <CardBody>
          <TableHead />
          {loading ? (
            <Loading />
          ) : (
            erroAmbient.map((err, index) => (
              <TableBody
                key={index}
                level={err.level}
                descricao={err.descricao}
                origem={err.origem}
                data={formatDate(err.data)}
                eventos={err.eventos}
                handleCheckElement={() => onCheck(index)}
              />
            ))
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
