import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Fruit from './fruit';
import store from './store';
import {Provider} from 'mobx-react';

const App=()=><Provider store={store}><Fruit/></Provider>

render(<App/>, document.getElementById('root'));
