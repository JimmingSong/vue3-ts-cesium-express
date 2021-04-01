import {reactive, onMounted, toRefs} from 'vue';
import req from '@/request';
interface SocketRouteItem {
    name: string,
    route: string
}
interface SocketRoute {
    wsRoute: Array<SocketRouteItem>
}
export function getSocketList () {
    const state = reactive<SocketRoute>({
        wsRoute: []
    });
    const getWsRoute = async () => {
        const res = await req.getSocketList();
        if (res.success) {
            console.log(res);
        }
        console.log(res);
    }
    onMounted(async () =>{
        await getWsRoute();
    });
    return {...toRefs(state)}
}