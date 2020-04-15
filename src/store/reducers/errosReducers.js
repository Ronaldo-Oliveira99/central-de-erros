const initialState = {
  erroList: [],
  erroAmbient: [],
  loading: true,
  Checked: [],
  testeState: ""
};

const ErrosReducer = (state = initialState, action) => {
  const { type, datas, index, valor, valorInput } = action;
  switch (type) {
    case "LOADING":
      return {
        loading: true
      };

    case "GET_ERROS":
      const erro = datas;
      const initiaError = erro[0].erros;
      return {
        ...state,
        erroList: erro,
        erroAmbient: initiaError,
        loading: false
      };

    case "SELECT_ERROS":
      const selectedError = state.erroList[valor].erros;
      return {
        ...state,
        erroAmbient: selectedError
      };

    case "CHECK_ERROS":
      const indexChecked = state.erroAmbient[index];
      indexChecked.isChecked = !indexChecked.isChecked;
      const newCheck = state.Checked;
      if (indexChecked.isChecked) {
        newCheck.push(indexChecked);
      }
      if (!indexChecked.isChecked) {
        newCheck.pop(indexChecked);
      }
      return {
        ...state,
        Checked: newCheck
      };

    case "DELETE_ERROS":
      const newarray2 = [];
      let deletList = state.erroAmbient;
      let deletList2 = state.Checked;

      deletList.forEach((e, i) => {
        if (deletList2.indexOf(e) === -1) {
          newarray2.push(e);
        }
      });
      return {
        ...state,
        erroAmbient: newarray2
      };

    case "ORDENAR_FREQUENCIA":
      let dispatchValue = valor;
      let selectedOrder = state.erroAmbient;

      if (dispatchValue == 2) {
        selectedOrder.sort((a, b) => {
          if (a.eventos < b.eventos) return -1;
          if (a.eventos > b.eventos) return 1;
          return 0;
        });
        state.erroAmbient.reverse();
      } else if (dispatchValue == 1) {
        selectedOrder.sort((a, b) => {
          if (a.level < b.level) return -1;
          if (a.level > b.level) return 1;
          return 0;
        });
      } else if (dispatchValue == 0) {
        return state.erroAmbient;
      }
      return {
        ...state
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
