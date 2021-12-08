import { SHOW_MODAL, HIDE_MODAL } from "../const/modal.const"

const initialState = {
  showStatus: false,
  name: "",
  address: "",
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        showStatus: true,
      }
    }
    case HIDE_MODAL: {
      return {
        ...state,
        showStatus: false,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
