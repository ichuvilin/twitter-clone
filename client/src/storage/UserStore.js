import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";

export default class UserStore {
    constructor() {
        let token = localStorage.getItem("token");
        if (token !== null) {
            this._isAuth = true;
            this._data = jwtDecode(token);
        } else {
            this._isAuth = false;
            this._data = {}
        }
        makeAutoObservable(this)
    }


    get isAuth() {
        return this._isAuth;
    }

    set isAuth(value) {
        this._isAuth = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }
}