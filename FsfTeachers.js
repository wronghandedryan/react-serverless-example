import React, { Component } from 'react';
import { render } from 'react-dom';
import Item from './Item';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class FsfTeacher() extends Component {
  constructor() {
    super();  
  }
  addHandler=()=>{
   this.props.store.add('new FsfTeacher')
  }  
  render() {
    const {store}=this.props;
    const items=store.FsfTeachers.map((item, i)=>
      <Item item={item} key={i} index={i} />);

    return <div style={{width:'500px'}}>
      <button onClick={this.addHandler}>Add</button>
      <ol>{items}</ol>
    </div>
  }
}


