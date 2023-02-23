import {$authHost, $host} from "../http";


const getAllTweets = async () => {
    const {data} = await $host.get("/tweets");
    return data;
}

const createNewTweet = async (text, userId) => {
    console.log(text)
    await $authHost.post("/tweets/create", {text, userId})
}

export {
    getAllTweets,
    createNewTweet
}