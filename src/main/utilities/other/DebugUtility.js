/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const DebugUtility = {

    log(...params) {
        if (global.Constant.isDebug) {
            console.log(...params);
        }
    }

};

export default DebugUtility;
