/*
 * action types
 */

export const GET_SYSNODE_LIST = 'GET_SYSNODE_LIST'
/*
 * action creators
 */

export function getSysnodeListAction(payload) {
  return { type: GET_SYSNODE_LIST, payload }
}
