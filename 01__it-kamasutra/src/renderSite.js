import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createPost, createMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

// createPost('эддд')

let renderSite = (a) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={a} createPost={createPost} createMessage={createMessage} />
        </BrowserRouter>, document.getElementById('root')
    );
}

export default renderSite;