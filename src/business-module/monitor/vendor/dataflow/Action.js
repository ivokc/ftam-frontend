/*
 * action types
 */

export const GET_TASK_MONITOR = 'GET_TASK_MONITOR'
export const GET_SYSNODE_MONITOR = 'GET_SYSNODE_MONITOR'
/*
 * action creators
 */



export function getTaskMonitorAction(payload) {
  return { type: GET_TASK_MONITOR, payload }
}
export function getSysnodeMonitorAction(payload) {
  return { type: GET_SYSNODE_MONITOR, payload }
}
