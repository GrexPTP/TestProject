import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Entry from './entry'
if (document.getElementById('content')) {
    ReactDOM.render(<Entry />, document.getElementById('content'));
}
