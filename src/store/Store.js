import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/RootReducer";
import { loadState, saveState } from "./LocalStorage";

export default function configureStore(initialState = {}) {
  const presistedState = loadState();

  const store = createStore(
    rootReducer,
    presistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    saveState({
      ...initialState,
      game: store.getState().game,
    });
  });

  return store;
}
