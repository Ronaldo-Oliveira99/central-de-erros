/* Este é o estado inicial do reducer de usuário ou seja o estado de usuário 
   deslogado */
const INITIAL_STATE = {
  usuarioEmail: '',
  usuarioLogado: 0,
  usuarioHash: '',
};

function usuarioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail, usuarioHash: action.usuarioHash }
    case 'LOG_OUT':
      return { ...state, usuarioLogado: 0, usuarioEmail: null, usuarioHash: null }
    default:
      return state;
  }
}

export default usuarioReducer;