export interface userModel {
    id?: number;
    name?: string;
    username?: string;
    password?: string;
}

export interface userInfoModel extends userModel {
    token?: string;
}
