import React from 'react';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

function App(props: any) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData} /> }/>
                <Route path={'/profile'} render={() => <Profile postsData={props.state.profilePage.postsData} />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
