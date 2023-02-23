import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Tweets from "./Tweets/Tweets";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import TweetCreate from "./Tweets/TweetCreate";

const AppRouter = observer(() => {
    return (
        <Routes>
            <Route path={"*"} element={<Tweets />}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registration"} element={<Registration/>}/>
        </Routes>
    );
});

export default AppRouter;