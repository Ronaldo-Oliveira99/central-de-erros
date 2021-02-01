import {
  OrdenarPor,
  BuscarPorInput,
  IdAleatorio,
  ArquivarOuDeletar,
  UnificarErros,
  CheckUncheckItens,
} from "../../utils";

const initialState = {
  erroList: [], // erros/ambientes
  initErros: [], //erros/todos
  errosRender: [], // erros/ambiente atual no render
  loading: true, // carregamento
  Checked: [], // array de erros selecionados no checkbox
  otherCheck: false, // não utilizado ainda
  selectedValor: 0, // valor da seleção Ambiente
  ordemValor: 0, //valor da seleção Ordenar Por:
  buscarPor: 0,
  keyErro: 0,
  libInput: false, // para manipulação da busca por input
  arquivarErro: [],
  checkedAll: false,
  ambientType: [] // a definir logica
 
};

const ErrosReducer = (state = initialState, action) => {
  const {
    type,
    datas,
    index,
    valor,
    ordemValor,
    buscarPor,
    inputChange,
    checkAll,
    checkItm,
    flagArquivar
  } = action;
  switch (type) {
    case "LOADING": // define state ao carregar dados
      return {
        ...state,
        loading: true,
      };

    case "GET_ERROS":
      let myArray = [];
      const erro = datas.map((i) => i.erros); //recupera um array de erros/ambiente
      const ambients = datas.map(i => i.ambiente) // tipo de ambientes
      console.log("libInput", state.libInput)
      myArray = UnificarErros(erro); //cria erro/geral a partir de erro/ambiente


      let initialError = IdAleatorio(myArray); // gera um inicio aleatóriode erro/geral

      return {
        ...state,
        erroList: erro, //cria um estado como erros/ambiente
        initErros: initialError, //array erros/geral
        errosRender: initialError, // estado inicial encaminhado para o render
        loading: false,
        libInput: false,
        ambientType: ambients
      };

    case "SELECT_ERROS":
      let valorInt = parseInt(valor); //valor indica ambiente do select
      let selectedError = []; //traz erros por seleção do ambiente

      //console.log("ErroList", state.erroList)
      //Logica para seleção dos ambientes
      valorInt === 0
        ? (selectedError = state.initErros)
        : (selectedError = state.erroList[valorInt - 1]);
      // traz a sequencia conforme a seleção Ordenar Por:
      OrdenarPor(state.ordemValor, selectedError);

      return {
        ...state, // retorna estados default
        errosRender: selectedError, //ambiente selecionado atualiza o render
        selectedValor: valorInt,
      };

    case "CHECK_ERROS":
      //trata das seleçõs de checkbox
      const indexChecked = state.errosRender[index]; //item checked do render
      const id = state.errosRender[index].id; // id do item checked
      indexChecked.done = checkItm; //atribui true ou false em done para tratamento de delete ou aquivar
      const stateChecked = state.Checked; 
      
      //funcao para separar itens checked
      let newCheck = CheckUncheckItens(indexChecked, stateChecked, id);

      return {
        ...state,
        Checked: newCheck, // cria un state com um array de itens para deletar
      };

    case "CHECK_ALL":
      let myArr = [];
     
      state.errosRender.map((error) => {
        if(checkAll){
          error.done = checkAll;
          myArr.push(error);
          return myArr
        }
        else{
       // if(!checkAll){
          error.done = checkAll;
          myArr.pop(error);
          return myArr
        }
      });
      myArr.sort((a, b) => {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
      console.log("myArr", myArr)
      return {
        ...state,
        checkedAll: checkAll,
        Checked: myArr,
      };

    case "DELETE_ARQUIVAR_ERROS":
     // let deleteButton = "Deletar";
      let dCheck = state.Checked; //array com id checkeds
      let dList = state.erroList; //erros/ambiente
      let dSelect = state.selectedValor; // recupera valor da seleção
      let dInit = state.initErros; // erros/geral
      let dRenderAtu = [];
      let arrDelete = [];
     
      // Atualiza estados simultaneamente
      if (dSelect === 0) {
        // atualiza erros/geral
        arrDelete = ArquivarOuDeletar(dCheck, dInit, dList, dSelect);
        dRenderAtu = arrDelete[0];
        state.initErros = dRenderAtu;
        state.erroList = arrDelete[1];

      } else {
         // atualiza erros/ambiente
        arrDelete = ArquivarOuDeletar(dCheck, dInit, dList, dSelect);
        let arrDelete2 = arrDelete[0]
        dRenderAtu = arrDelete2[dSelect - 1]
        state.erroList = arrDelete[0];
        state.initErros = arrDelete[1];
      }

      //identifica ação do botão arquivar
      flagArquivar ? dCheck.map((i) => {
        console.log("Vim do Arquivar", state.arquivarErro);
        return state.arquivarErro.push(i);
      }) :
      console.log("Vim do Delete");
      return {
        ...state,
        errosRender: dRenderAtu,
        Checked: [],
        checkedAll: false,
      };

    case "ORDENAR_FREQUENCIA":
      const selectedOrder = state.errosRender;
      OrdenarPor(ordemValor, selectedOrder);

      return {
        ...state,
        ordemValor: ordemValor,
      };

    case "BUSCAR_POR":
      let keysErro = ""; // recuperar a identificação do erro ao selecionar o tipo de busca
      let liberarInput = state.liberarInput; //funcionar input apos esta seleção
      let buscarPorInt = parseInt(buscarPor)
      if (buscarPorInt === 0) {
        liberarInput = false;
      } else if (buscarPorInt === 1) {
        keysErro = "descricao";
        liberarInput = true;
      } else if (buscarPorInt === 2) {
        keysErro = "origem";
        liberarInput = true;
      } else if (buscarPorInt === 3) {
        keysErro = "data";
        liberarInput = true;
      }
      return {
        ...state,
        buscarPor: buscarPor,
        keyErro: keysErro,
        libInput: liberarInput,
      };

    case "SEARCH_ERROS":
      let inputValue = inputChange; // input digitado
      let buscarPorInput = state.errosRender; //
      let erroObjs = state.erroList; // array de todos erros
      let keyErro = state.keyErro; // descrição do erro a ser buscado

      state.libInput // para liberar a busca pelo input
        ? (buscarPorInput = BuscarPorInput(erroObjs, keyErro, inputValue))
        : // gerar tratamento de erro
          console.log("Erro : Escolha uma Tipo de Busca");

      return {
        ...state,
        errosRender: buscarPorInput,
      };
    default:
      return state;
  }
};

export default ErrosReducer;
