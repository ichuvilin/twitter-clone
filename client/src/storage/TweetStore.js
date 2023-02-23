import {makeAutoObservable} from "mobx";

export default class TweetStore {
    constructor() {
        this._tweets = [];
        makeAutoObservable(this)
    }

    get tweets() {
        return this._tweets;
    }

    setTweets(value) {
        this._tweets = value;
    }
}