import axios from 'axios';

const baseURL = global.Constant.baseURL;
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials= true;


const NetworkUtility = {

  getRequest(url, params = {}){
    return axios.get(url,{
      ...params
    });
  },
  postRequest(url, params = {}) {

    return new Promise((resolve,reject) => {
      axios.post(url,params).then(response => {
        global.Just.log('postRequest----->response>>>',response);
        if (response.status === 200) {
          resolve(response.data);
        }else {
          reject(response.statusText);
        }
      }).catch(error => {
        global.Just.log('postRequest----->error>>>',error);
      });
    })
  },
  configRequest(url, method,params = {}){
    return axios({
      method: method,
      url: url,
      data: {
        ...params
      }
    });
  }


};

export default NetworkUtility;
