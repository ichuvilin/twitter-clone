import React, {useContext, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./Auth/Login";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routs";

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return (
        <Routes>

            {
                !user.isAuth && <Route path={"*"} element={<Login/>}/>
            }

            {
                user.isAuth && authRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            {
                publicRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
        </Routes>
    );
});

export default AppRouter;