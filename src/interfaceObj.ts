export interface ReturnObj {
    success: boolean,
    msg: string,
    value?: any
}

export interface MsgContent {
    msg: string,
    isSelf: boolean
}

export interface UserInfo {
    id: number,
    name: string,
    email: string
}
