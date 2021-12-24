import { CLOSE_POPUP, SHOW_POPUP } from './action'

const initialState = {
  showPopup: false,
  date: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        showPopup: true,
        date: action.payload,
      }
    case CLOSE_POPUP:
      return {
        ...state,
        showPopup: false,
        date: null,
      }
    default:
      return state
  }
}
