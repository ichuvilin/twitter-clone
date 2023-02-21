import './App.css';
import {BrowserRouter} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {Context} from "./index";
import {getAllTweets} from "./http/api/tweetAPI";
import {observer} from "mobx-react-lite";
import NavBar from "./components/Navigate/NavBar";
import AppRouter from "./components/AppRouter";

const App = observer(() => {

    const {tweets} = useContext(Context)

    useEffect(() => {
        getAllTweets().then(t => tweets.tweets = t)
    })

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
