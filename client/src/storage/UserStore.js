import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth;
    }

    setIsAuth(value) {
        this._isAuth = value;
    }

    get user() {
        return this._data;
    }

    setUser(value) {
        this._data = value;
    }
}