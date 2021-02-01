import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import TokenUser from "../components/TokenUser";
import { useSelector, /* useDispatch */ } from "react-redux";
import { FormatDate } from "../../utils";
//import Loading from "../components/Loading";
//import api from "../../api";

function Erros() {
  const { ambients } = useParams();
  const { errosRender } = useSelector(({ erros }) => erros);

  const [erro, setErro] = useState([]);

  useEffect(() => {
    function getErros() {
      let numAmbients = parseInt(ambients);
      var teste = errosRender.filter((i) => i.id === numAmbients);
      setErro(teste);
    }

    getErros();
  }, [ambients, errosRender]);

  console.log("erro", erro["origem"]);
  return (
    <Card className="container">
      <TokenUser />

      {!errosRender ? (
        <p>Nunhum Ero encontrado</p>
      ) : (
        erro.map((error, index) => {
          return (
            <div key={index} className="container border border-3 mt-1 p-5">
              <div className="mb-5">
                <div className="mb-5">
                  <Link to="/app" className="btn-link ">
                    <button
                      type="button"
                      className="btn btn-outline-light col-2"
                    >
                      Voltar
                    </button>
                  </Link>
                </div>
                <h2>
                  Erro no <u>{error.origem}</u> em{"  "}
                  <u>{FormatDate(error.data)}</u>
                </h2>
              </div>

              <div className="row pt-4">


                <div className="col-9">
                  <h4>Título</h4>
                  <p className="text-break">{error.descricao}</p>
                  <br></br>
                  <h4>Detalhes</h4>
                  <p className="text-break">{error.detalhes}</p>
                </div>
                <div className="col-3 text-start px-3">
                  <div className="mb-4">
                    <button type="button" className="btn btn-outline-light" disabled>
                      {error.level}
                    </button>
                  </div>
                  <div>
                    <h5>Ambiente</h5>
                    <p>{error.eventos}</p>
                  </div>
                  <div>
                    <h5>Eventos</h5>
                    <p>{error.eventos}</p>
                  </div>
                  <p>Coletado por Token</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </Card>
  );
}

export default Erros;
