export const SHOW_POPUP = 'SHOW_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'

export function showPopup(date) {
  return {
    type: SHOW_POPUP,
    payload: date,
  }
}

export function closePopup() {
  return {
    type: CLOSE_POPUP,
  }
}
