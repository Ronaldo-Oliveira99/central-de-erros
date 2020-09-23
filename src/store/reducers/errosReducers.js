const initialState = {
  erroList: [],
  erroAmbient: [],
  loading: true, // carregamento
  Checked: [], // array de itens para deletar
  testeState: "", // não utilizado ainda
};

const ErrosReducer = (state = initialState, action) => {
  const { type, datas, index, valor, valorInput } = action;
  switch (type) {
    case "LOADING": // define state ao carregar dados
      return {
        loading: true,
      };

    case "GET_ERROS":
      const erro = datas; //datas= objeto json trazido pela função  api()
      const initiaError = erro[0].erros; // inicia a tela com os dados objeto de datas [2].erros[] -> id 1, id2...
      return {
        ...state,
        erroList: erro, // objeto json de erros
        erroAmbient: initiaError, // tela de erros para aparecer no inicio
        loading: false,
      };

    case "SELECT_ERROS":
      const selectedError = state.erroList[valor].erros;

      return {
        ...state, // retorna estados default
        erroAmbient: selectedError, // a seleção de erros vira state do index selecionado
      };

    case "CHECK_ERROS": // faz o check do button para selicionar para fins de deletar ou armazenar
      const indexChecked = state.erroAmbient[index]; // seleciona o objeto de erros do array "erros"
      indexChecked.isChecked = !indexChecked.isChecked; // alterna entre true e false
      const newCheck = state.Checked;
      console.log(newCheck);
      if (indexChecked.isChecked) {
        newCheck.push(indexChecked);
      }
      if (!indexChecked.isChecked) {
        newCheck.pop(indexChecked);
      }
      return {
        ...state,
        Checked: newCheck, // cria un state com um array de itens para deletar
      };

    case "DELETE_ERROS":
      const newarray2 = [];
      let deletList = state.erroAmbient;
      let deletList2 = state.Checked; // array de itens selecionados para deletar.

      deletList.forEach((e, i) => {
        // compara o dois array e mantem os itens que não foram selecionados para delete.
        if (deletList2.indexOf(e) === -1) {
          newarray2.push(e);
        }
      });
      return {
        ...state,
        erroAmbient: newarray2,
      };

    case "ORDENAR_FREQUENCIA":
      let selectedOrder = state.erroAmbient;

      if (valor == 0) {
        // Esta logica precisa de alterações
        selectedOrder.sort((a, b) => {
          if (a.level < b.level) return 0;
          if (a.level > b.level) return 0;
          //return 0;
        });
      } else if (valor == 1) {
        //ok
        selectedOrder.sort((a, b) => {
          if (a.level < b.level) return -1;
          if (a.level > b.level) return 1;
          return 0;
        });
      } else if (valor == 2) {
        //ok
        // selecionando o index do button, inverte a sequencia.
        selectedOrder.sort((a, b) => {
          if (a.eventos < b.eventos) return -1;
          if (a.eventos > b.eventos) return 1;
          return 0;
        });
        state.erroAmbient.reverse();
      }
      return {
        ...state,
      };

    // case "SEARCH_ERROS":
    //   let inputValue = valorInput;
    //   let results = state.erroAmbient.filter(erro =>
    //     erro.descricao.toLowerCase().includes(inputValue)
    //   );

    //   return {
    //     ...state,
    //     erroAmbient: results
    //   };
    default:
      return state;
  }
};

export default ErrosReducer;
