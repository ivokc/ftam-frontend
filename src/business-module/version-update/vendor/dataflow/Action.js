/*
 * action types
 */

export const GET_VERSIONUPDATE_LIST = 'GET_VERSIONUPDATE_LIST'
/*
 * action creators
 */

export function getVersionUpdateListAction(payload) {
  return { type: GET_VERSIONUPDATE_LIST, payload }
}
