
const initialState = {
  id:"",
  password:""
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_id") {
    return Object.assign({}, state, {
      id: action.id,
      password: action.password
    });
  }
  return state;
}

export default rootReducer;
// reducing function