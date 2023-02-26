import {BrowserRouter} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {getAllTweets} from "./http/api/tweetAPI";
import {observer} from "mobx-react-lite";
import NavBar from "./components/Navigate/NavBar";
import AppRouter from "./components/AppRouter";
import jwtDecode from "jwt-decode";

const App = observer(() => {

    const [loading, setLoading] = useState(true);
    const {user, tweets} = useContext(Context)

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            user.setIsAuth(true);
            user.setUser(jwtDecode(token));
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
