import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../components/Filter";
import { TableBody, TableHead } from "../components/Table";
import Card from "../components/Card";
import Loading from "../components/Loading";
import TokenUser from "../components/TokenUser";
import { FormatDate } from "../../utils";
import api from "../../api";

function Home() {
  const dispatch = useDispatch();
  // Traz informações do state para utilização
  const { errosRender } = useSelector(({ erros }) => erros);
  const { loading } = useSelector(({ erros }) => erros);
  const { libInput } = useSelector(({ erros }) => erros);
  const { checkedAll } = useSelector(({ erros }) => erros);
  const { nameUser } = useSelector(({ login }) => login);

  const [validacao, setValidacao] = useState(false);

  useEffect(() => {
    // Obtem um json de erros e manda para um state inicial
    function getApi(){
        api().then((datas) => {
        dispatch({ type: "GET_ERROS", datas });
      });
    }
    getApi()
  }, [dispatch]);

  // Primeira caixa de seleção "ESCOLHA UM AMBIENTE"
  const handleSelected = (e) => {
    const valor = e.target.value;
    console.log("valortypefora", typeof valor);
    dispatch({ type: "SELECT_ERROS", valor });
  };
  //Segunda caixa de seleção "ORDENAR POR"
  const onHandleOrder = (e) => {
    const ordemValor = e.target.value;
    //console.log("valorFora", ordemValor);
    dispatch({ type: "ORDENAR_FREQUENCIA", ordemValor });
  };
  //Terceira caixa de seleção "Buscar Por"
  const onHandleBuscar = (e) => {
    const buscarPor = e.target.value;
    dispatch({ type: "BUSCAR_POR", buscarPor });
  };

  //Input
  const handleChangeInput = (e) => {
    const inputChange = e.target.value;
    libInput
      ? dispatch({ type: "SEARCH_ERROS", inputChange })
      : inputChange === ""
      ? setValidacao(false)
      : setValidacao(true);

    
  };

  // deletar itens
  const deleteHandler = () => {
    dispatch({ type: "DELETE_ARQUIVAR_ERROS" });
  };

  const arquivarHandler = () => {
    let flagArquivar = true;
    dispatch({ type: "DELETE_ARQUIVAR_ERROS", flagArquivar });
  };

  // checkbox Itens
  const handleCheckItem = (e, index) => {
    let checkItm = e.target.checked;
    dispatch({ type: "CHECK_ERROS", index, checkItm });
  };

  // checkbox All
  const handleCheckAllItem = (e) => {
    let checkAll = e.target.checked;
    dispatch({ type: "CHECK_ALL", checkAll });
  };

  return (
    <Card className="container">
      <TokenUser user={nameUser}/>
      <Filter
        //Setor dos filtros de seleção e Buscas
        onChangeLink={handleSelected}
        onChangeOrder={onHandleOrder}
        onChangeBuscar={onHandleBuscar}
        onChangeInput={handleChangeInput}
        deleteHandler={() => deleteHandler()}
        arquivarHandler={() => arquivarHandler()}
        validInput={validacao}
        validBorder={validacao}
       
        
       
      />
      <div className="table-responsive">
        <table className="table table-secondary table-hover">
          <TableHead
            onChangeHead={(e) => handleCheckAllItem(e)}
            isChecked={checkedAll}
          />

          {loading ? (
            <Loading />
          ) : (
            errosRender.map((error, index) => {
              return (
                <TableBody
                  data={error}
                  key={index}
                  isChecked={error.done}
                  level={error.level}
                  descricao={error.descricao}
                  eventos={error.eventos}
                  origem={error.origem}
                  date={FormatDate(error.data)}
                  onChange={(e) => handleCheckItem(e, index)}
                  ambients={error.id}
                />
              );
            })
          )}
        </table>
      </div>
    </Card>
  );
}

export default Home;
