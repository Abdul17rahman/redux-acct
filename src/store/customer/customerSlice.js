const initialStore = {
  name: "",
  id: null,
};

export default function customerReducer(state = initialStore, action) {
  switch (action.type) {
    case "customer/create":
      return { ...state, name: action.payload.name, id: action.payload.id };
    default:
      return { ...state };
  }
}

export function create(name, id) {
  return {
    type: "customer/create",
    payload: { name, id },
  };
}
