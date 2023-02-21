import {$host} from "../http";


const getAllTweets = async () => {
    const {data} = await $host.get("/tweets");
    return data;
}


export {
    getAllTweets
}