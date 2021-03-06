import { message } from 'antd';

const MessageUtility = {

    showInfo(text) {
        message.info(text);
    },

    showSuccess(text){
        message.success(text);
    },

    showError(text){
        message.error(text);
    },

    showWarning(text) {
        message.warning(text);
    },

    showLoading() {
      global.Switch.loading = true;
    },

    hideLoading() {
      global.Switch.loading = false;
    }

}

export default MessageUtility;
