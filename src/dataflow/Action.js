/*
 * action types
 */

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_FORGET = 'USER_FORGET'

/*
 * action creators
 */

export function loginAction(userInfo) {
  return { type: USER_LOGIN, payload:userInfo }
}

export function logoutAction(userInfo) {
  return { type: USER_LOGOUT, payload:userInfo }
}

export function userForgetAction(payload) {
  return { type: USER_FORGET, payload:payload }
}
