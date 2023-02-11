const hobbyFormId = document.querySelector("#hobbyFormId");
const hobbyTextId = document.querySelector("#hobbyTextId");
const hobbyListId = document.querySelector("#hobbyListId");

// initialState
// reducer
// store
const { createStore } = window.Redux;

const initialState = JSON.parse(localStorage.getItem("hobby_list")) || [];

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY":
      // tao mang moi tranh tham chieu trong js
      return [...state, action.payload];
    default:
      return state;
  }
};

let store = createStore(hobbyReducer);

// render hobby list
const renderHobbyList = (hobbies) => {
  if (!Array.isArray(hobbies) && hobbies.length === 0) return;
  if (!hobbies) return;

  // reset previous content of ul
  hobbyListId.innerHTML = " ";

  for (const hobby of hobbies) {
    const liElement = document.createElement("li");
    liElement.textContent = hobby;
    hobbyListId.appendChild(liElement);
  }
};

// render initial hobby list
renderHobbyList(store.getState());

// sent data from input to store
if (hobbyFormId) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const action = {
      type: "ADD_HOBBY",
      payload: hobbyTextId.value,
    };

    store.dispatch(action);
    hobbyFormId.reset();
  };
  hobbyFormId.addEventListener("submit", handleSubmit);
}

store.subscribe(() => {
  renderHobbyList(store.getState());
  localStorage.setItem("hobby_list", JSON.stringify(store.getState()));
});
