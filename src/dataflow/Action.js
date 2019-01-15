/*
 * action types
 */

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_FORGET = 'USER_FORGET'
export const GET_MENU = 'GET_MENU'
export const GET_DICT = 'GET_DICT'
/*
 * action creators
 */

export function loginAction(payload) {
  return { type: USER_LOGIN, payload }
}

export function logoutAction(payload) {
  return { type: USER_LOGOUT, payload }
}

export function userForgetAction(payload) {
  return { type: USER_FORGET, payload }
}

export function getMenuAction(payload) {
  return { type: GET_MENU, payload }
}

export function getDictAction(payload) {
  return { type: GET_DICT, payload }
}