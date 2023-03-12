import {BrowserRouter} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {getAllTweets} from "./http/api/tweetAPI";
import {observer} from "mobx-react-lite";
import NavBar from "./components/Navigate/NavBar";
import AppRouter from "./components/AppRouter";

const App = observer(() => {

    const [loading, setLoading] = useState(true);
    const {user, tweets} = useContext(Context)

    useEffect(() => {
        let userLocalData = JSON.parse(localStorage.getItem("user"));
        if (userLocalData) {
            user.setIsAuth(true);
            user.setUser(userLocalData);
        }
        getAllTweets().then(data => tweets.setTweets(data))
    })

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
