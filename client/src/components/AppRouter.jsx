import React from 'react';
import {Route, Routes} from "react-router-dom";
import Tweets from "./Tweets/Tweets";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"*"} element={<Tweets />}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registration"} element={<Registration/>}/>
        </Routes>
    );
};

export default AppRouter;