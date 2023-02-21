import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import UserStore from "./storage/UserStore";
import NavBar from "./components/Navigate/NavBar";
import TweetStore from "./storage/TweetStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            tweets: new TweetStore()
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);