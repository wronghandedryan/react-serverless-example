import React, { Component } from 'react';
import { render } from 'react-dom';
import Item from './Item';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Fruit extends Component {
  constructor() {
    super();  
  }
  addHandler=()=>{
   this.props.store.add('new fruits')
  }  
  render() {
    const {store}=this.props;
    const items=store.fruits.map((item, i)=>
      <Item item={item} key={i} index={i} />);

    return <div style={{width:'500px'}}>
      <button onClick={this.addHandler}>Add</button>
      <ol>{items}</ol>
    </div>
  }
}


