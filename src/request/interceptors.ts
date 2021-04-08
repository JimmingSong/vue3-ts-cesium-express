import axios, {AxiosRequestConfig} from 'axios';
import {ReturnObj} from '@/interfaceObj';
axios.defaults.baseURL = 'http://localhost:3001';
class Interceptors {
    constructor() {
        this.requestInterceptor();
    }
    async postRequest (url: string, data: Record<string, unknown>, options?: AxiosRequestConfig) {
        console.log(url, 'url====>');
        const res = await axios.post(url, data, options)
        return res.data;
    }
    async getRequest (url: string, options?: AxiosRequestConfig) {
        const res = await axios.get(url, options);
        return res.data;
    }
    async userRequest (url:string, data: Record<string, unknown>) {
        return this.postRequest(`/user${url}`, data);
    }

    requestInterceptor () {
        axios.interceptors.request.use(config => {
            // config.url = `${config.url}`;
            return config;
        }, this.errorHandle)
    }
    errorHandle (err: any): ReturnObj {
        return {
            success: false,
            msg: err,
            value: null
        }
    }
}
export default Interceptors;
