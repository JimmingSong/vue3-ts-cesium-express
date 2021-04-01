import {ReturnObj} from "@/interfaceObj";
import axios from 'axios';
import Interceptors from "@/request/interceptors";
axios.interceptors.request
class Req extends Interceptors{
    getSocketList ():Promise<ReturnObj> {
        return axios.get('/getRoute');
    }
}
export default new Req();