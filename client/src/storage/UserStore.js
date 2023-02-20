import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._data = {}
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