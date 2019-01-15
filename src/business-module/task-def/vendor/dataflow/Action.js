/*
 * action types
 */

export const GET_TASKDEF_LIST = 'GET_TASKDEF_LIST'
/*
 * action creators
 */

export function getTaskdefListAction(payload) {
  return { type: GET_TASKDEF_LIST, payload }
}
