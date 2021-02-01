
const TEXT_MAX_LENGTH = 50;

function PreviewText(text) {
  if (text.length > TEXT_MAX_LENGTH) {
    return `${text.substring(0, TEXT_MAX_LENGTH)}...`;
  }

  return text;
}

//timestamp
function FormatDate(milliseconds) {
  return new Date(milliseconds).toLocaleString();
}

function OrdenarPor(ordemValor, selectedOrder) {
  if (ordemValor === "0") {
    IdAleatorio(selectedOrder);
    // selectedOrder.sort((a, b) => {
    //   return a.id - b.id;
    // });
  } else if (ordemValor === "1") {
    console.log("ordemValor", ordemValor);
    selectedOrder.sort((a, b) => {
      //arr.sort((a,b) => a - b)
      if (a.level < b.level) return -1;
      if (a.level > b.level) return 1;
      return 0;
    });
  } else if (ordemValor === "2") {
    selectedOrder.sort((a, b) => {
      return a.eventos - b.eventos;
    });
    selectedOrder.reverse();
  }
}

function BuscarPorInput(erroObj, keyErro, inputs) {
  let myArray = [];
  let filtro = Object.values(erroObj).map((i) =>
    i.filter((e) => {
      // se o dado for do tipo number(timestamp)
      return typeof e[keyErro] === "number"
        ? FormatDate(e[keyErro]).includes(inputs)
        : e[keyErro].includes(inputs);
    })
  );
  //console.log("filtro", filtro);  --> fazer alogica "nao encontrado"
  filtro.map((i) =>
    i.map((e) => {
      return myArray.push(e);
    })
  );

  return myArray;
}

// carrega um array com Id's aleatórios
function IdAleatorio(array) {
  var m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// Atualiza erros(geral/ambiente) simultaneamente ao deletar/arquivar erros
function ArquivarOuDeletar(erroCheck, initialErrors, erroList, valorSelect) {
  let valor = [];
  let erroL,
    erroL2 = [];
  // se for erros geral , listados
  if (valorSelect === 0) {
    if (erroCheck.length === 0) {
      erroL = initialErrors;
      erroL2 = erroList;
      // console.log(`Selecione itens para ${typeButton}`);
      console.log(`Selecione itens para Deletar`);
      //return erroL;
    } else {
      // atualiza erros/todos
      erroL = initialErrors.filter((i) => {
        return erroCheck.map((e) => e.id).indexOf(i.id) === -1;
      });

      erroL2 = erroList.map((i) =>
        i.filter((e) => erroL.map((i) => i.id).indexOf(e.id) !== -1)
      );
    }
    valor[0] = erroL;
    valor[1] = erroL2;
    return valor;

    // erro por ambiente
  } else {
    if (erroCheck.length === 0) {
      console.log(`Selecione itens para Deletar`);
      erroL = erroList;
      erroL2 = initialErrors;
    } else {
      erroL = erroList.map((i) =>
        i.filter((e) => erroCheck.map((i) => i.id).indexOf(e.id) === -1)
      );
      erroL2 = initialErrors.filter((i) => {
        return (
          UnificarErros(erroL)
            .map((f) => f.id)
            .indexOf(i.id) !== -1
        );
      });
    }
    valor[0] = erroL;
    valor[1] = erroL2;
    return valor;
  }
}

function UnificarErros(array) {
  let newArr = [];
  array.map((i) =>
    i.map((e) => {
      // lista todos os erros dos ambientes em um único array
      return newArr.push(e);
    })
  );
  return newArr;
}

function CheckUncheckItens(itemCheck, checkedState, ids) {
  if (itemCheck.done) {
    console.log("o ID " + ids + " é false , agora é TRUE");
    checkedState.push(itemCheck);
    checkedState.sort((a, b) => {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    return checkedState;
  }

  if (!itemCheck.done) {
    console.log("O ID " + ids + " é true , agora é FALSE");
    let atualIndex = checkedState.indexOf(itemCheck);
    checkedState.splice(atualIndex, 1);
  }

  return checkedState;
}


export {
  PreviewText,
  FormatDate,
  OrdenarPor,
  BuscarPorInput,
  IdAleatorio,
  ArquivarOuDeletar,
  UnificarErros,
  CheckUncheckItens,

};
