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
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                {/*<Route path={'/profile'} component={Profile}/>*/}

                <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} /> }/>
                <Route path={'/profile'} render={() => <Profile postsData={props.postsData} />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
