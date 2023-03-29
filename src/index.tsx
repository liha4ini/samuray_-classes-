import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const postsData = [
    {id: 1, message: 'Hi? how are you?', likesCount: 12},
    {id: 2, message: 'Are you work today?', likesCount: 5},
    {id: 3, message: 'Are you work today?', likesCount: 5},
    {id: 4, message: 'Are you work today?', likesCount: 5},
]

const dialogsData = [
    {id: 1, name: 'Vika'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Diana'},
    {id: 4, name: 'Nika'},
]

const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am fine!'},
    {id: 4, message: 'Fuck you'},
]



ReactDOM.render(
    <App
        postsData={postsData}
        dialogsData={dialogsData}
        messagesData={messagesData}
    />,
  document.getElementById('root')
);