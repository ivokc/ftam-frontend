import axios from 'axios';

const baseURL = global.Constant.baseURL;
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials= true;
axios.defaults.timeout = 5000;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  global.Just.log('interceptors----->request----->url>>>',config.url);
  global.Just.log('interceptors----->request----->config>>>',config);
  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  global.Just.log('interceptors----->response----->url>>>',response.config.url);
  global.Just.log('interceptors----->response----->response>>>',response);
  if(response.data.code === '000000'){
    return response.data.data;
  }else{
    global.Just.showError(response.data.msg);
    return Promise.reject(response.data.msg);
  }
}, function (error) {
  // 对响应错误做点什么
  global.Just.log('interceptors----->response----->error>>>',error);
  global.Just.showError(error.toString());
  return Promise.reject(error);
});

const NetworkUtility = {

  getRequest(url, params = {}){
    return axios.get(url,{
      ...params
    });
  },
  postRequest(url, params = {}) {

    return axios.post(url,params);
  },
  configRequest(url, method,params = {}){
    return axios({
      method: method,
      url: url,
      data: {
        ...params
      }
    });
  },

  batchRequest(requests){
    return axios.all(requests)
  }

};

export default NetworkUtility;
