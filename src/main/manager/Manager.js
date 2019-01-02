/**
 * @Author: jjm
 * @Date:   2017-12-25T14:42:02+08:00
 * @Email:  jijm@bosc.cn
 * @Project: JJMproject
 * @Filename: manager.js
 * @Last modified by:   jjm
 * @Last modified time: 2018-01-26T16:13:53+08:00
 */

import NetworkUtility from '../utilities/data/NetworkUtility';
// import DBUtility from '../utilities/data/DBUtility';
import DebugUtility from '../utilities/other/DebugUtility';

//functional
export const FunctionalManager = {
  ...NetworkUtility,
  ...DebugUtility
};


//ui
export const UIManager = {
};
