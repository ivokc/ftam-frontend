/*
 * action types
 */

export const GET_ALERTEVENT_LIST = 'GET_ALERTEVENT_LIST'
/*
 * action creators
 */

export function getalertEventListAction(payload) {
  return { type: GET_ALERTEVENT_LIST, payload }
}
