import React, { Component } from 'react';
const el = React.createElement;
import { EditItem } from './EditItem';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Item extends Component {
  constructor(props) {
    super(props);    
  }
  setIsEdit=()=>{
    const {item}=this.props;
    item.isEdit=true;
  }
  remove=()=>{
    const {store, item}=this.props;
    store.remove(item);
  }
  render() {
    const {store, item, index}=this.props;
    const buttons=item.isEdit?null: <span><button 
      style={{ float: 'right' }} 
      onClick={this.remove}>
      X
      </button>
      <button  style={{ float: 'right' }}
      onClick={this.setIsEdit}> Edit</button></span>;
    return (<li>
      {item.isEdit?<EditItem item={item} index={index}/>
      : <span>{item.name}</span>}
      {buttons}
    </li>);
  }
}
