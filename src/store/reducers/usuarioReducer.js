const initialState = {
    nameUser: "",
    libButton: false
 
};

const usuarioReducer = (state = initialState, action) => {
  const { type, inputChange } = action;
  switch (type) {
    case "NAME_USER":
      const storeName = inputChange;
      console.log("Users", storeName);

      return {
        ...state,
        nameUser: storeName,
      };

      default:
        return state;
      }
    };

export default usuarioReducer;
