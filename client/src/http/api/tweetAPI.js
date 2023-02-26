import {$authHost, $host} from "../http";


const getAllTweets = async () => {
    const {data} = await $host.get("/tweets");
    return data;
}

const createNewTweet = async (text, userId) => {
    await $authHost.post("/tweets/create", {text, userId})
}


const getAllTweetsByUser = async (id) => {
    const {data} = await $host.get(`/tweets/${id}`);
    return data;
}

export {
    getAllTweets,
    createNewTweet,
    getAllTweetsByUser
}