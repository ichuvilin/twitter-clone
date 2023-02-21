export default class TweetStore {
    constructor() {
        this._tweets = {};
    }


    get tweets() {
        return this._tweets;
    }

    set tweets(value) {
        this._tweets = value;
    }
}