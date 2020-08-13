import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import FsfTeachers from './fsfTeachers';
import store from './store';
import {Provider} from 'mobx-react';

const App=()=><Provider store={store}><FsfTeachers/></Provider>

render(<App/>, document.getElementById('root'));
