/*
 * action types
 */

export const GET_VERSIONMANAGE_LIST = 'GET_VERSIONMANAGE_LIST'
/*
 * action creators
 */

export function getVersionManageListAction(payload) {
  return { type: GET_VERSIONMANAGE_LIST, payload }
}
