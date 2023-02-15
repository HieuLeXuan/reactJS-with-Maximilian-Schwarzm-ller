const initialStatte = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialStatte, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_HOBBY":
      return { ...state, list: [...state.list, action.payload] };
    case "SET_ACTIVE_HOBBY":
      return { ...state, activeId: action.payload.id };
    default:
      return state;
  }
};

export default hobbyReducer;
