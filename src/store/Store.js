import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/RootReducer";
import { createBrowserHistory } from "history";
import { loadState, saveState } from "./LocalStorage";

export default function configureStore(initialState = {}) {
  const presistedState = loadState();

  const store = createStore(
    rootReducer,
    presistedState,
    applyMiddleware(thunk, routerMiddleware)
  );

  store.subscribe(() => {
    saveState({
      ...initialState,
      game: store.getState().game,
    });
  });

  return store;
}

// Route change via Redux
export const history = createBrowserHistory();

const routerMiddleware = () => (next) => (action) => {
  if (action.type === "ROUTE" && action.to) {
    history.push(action.to);
  }

  next(action);
};
