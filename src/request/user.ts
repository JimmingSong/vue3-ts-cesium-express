import Interceptors from "@/request/interceptors";

export default class User extends Interceptors{
    login (data: Record<string, unknown>) {
        return this.userRequest('/add', data);
    }
}