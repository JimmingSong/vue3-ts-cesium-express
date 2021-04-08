import {ReturnObj} from "@/interfaceObj";
import axios from 'axios';
import Interceptors from "@/request/interceptors";
import User from "@/request/user";
class Req extends Interceptors{
    public user: User;
    constructor() {
        super();
        this.user = new User();
    }
    getSocketList ():Promise<ReturnObj> {
        return axios.get('/getRoute');
    }
}
export default new Req();