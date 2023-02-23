import React, {createContext, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./storage/UserStore";
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