import { CREATE, DELETE } from "../const/list.const"

const initialState = {
  list: [{ name: "拉钩", address: "https://www.lagou.com" }],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE: {
      return {
        list: state.list.concat(action.payload),
      }
    }
    case DELETE: {
      const list = state.list.filter(
        item =>
          item.name !== action.payload.name &&
          item.address !== action.payload.address
      )
      return { list }
    }
    default: {
      return state
    }
  }
}

export default reducer
