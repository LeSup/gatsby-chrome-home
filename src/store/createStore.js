import { createStore } from "redux"
import rootReducer from "./reducers/root.reducer"

function getStore() {
  const store = createStore(rootReducer)
  return store
}

export default getStore
