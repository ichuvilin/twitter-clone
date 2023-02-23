import {BrowserRouter} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {getAllTweets} from "./http/api/tweetAPI";
import {observer} from "mobx-react-lite";
import NavBar from "./components/Navigate/NavBar";
import AppRouter from "./components/AppRouter";
import {check} from "./http/api/userAPI";
import jwtDecode from "jwt-decode";

const App = observer(() => {

    const [loading, setLoading] = useState(true);
    const {user, tweets} = useContext(Context)

    useEffect(() => {
        check().then(data => {
            if (data !== null) {
                user.setUser(jwtDecode(data.token));
                user.isAuth = true;
            }
        }).finally(() => setLoading(false))
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
