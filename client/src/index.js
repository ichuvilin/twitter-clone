import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserStore from "./storage/UserStore";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";

export const Context = createContext(null);

console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore()
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path={"*"} element={<App/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/registration"} element={<Registration/>}/>
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);