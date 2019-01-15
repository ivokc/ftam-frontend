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
import MessageUtility from '../utilities/ui/MessageUtility';
import DebugUtility from '../utilities/other/DebugUtility';
import DateUtility from '../utilities/data/DateUtility';
import DictUtility from '../utilities/data/DictUtility';

//functional
export const FunctionalManager = {
  ...NetworkUtility,
  ...DebugUtility,
  ...DateUtility,
  ...DictUtility
};


//ui
export const UIManager = {
  ...MessageUtility

};
