/*
 * action types
 */

export const GET_ALERTDEF_LIST = 'GET_ALERTDEF_LIST'
/*
 * action creators
 */

export function getAlertDefListAction(payload) {
  return { type: GET_ALERTDEF_LIST, payload }
}
