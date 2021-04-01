import axios from 'axios';
import {ReturnObj} from '@/interfaceObj'
class Interceptors {
    constructor() {
        this.requestInterceptor();
    }
    requestInterceptor () {
        axios.interceptors.request.use(config => {
            config.url = `http://localhost:3001${config.url}`;
            return config
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