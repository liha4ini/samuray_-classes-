import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://png.pngtree.com/png-clipart/20220208/ourmid/pngtree-3d-icon-of-rocket-for-startup-business-and-bitcoins-advertise-png-image_4381459.png" alt=""/>
            </header>
            <nav className="nav">
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
            </nav>
            <div className="content">
                Main content
            </div>
        </div>
    );
}

export default App;
