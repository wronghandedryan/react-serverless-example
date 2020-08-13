
import React, {Component} from 'react';

import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export class EditItem extends Component{
  constructor(props){
    super(props)
    this.state={name:props.item.name}
  }
  saveHandler=()=>{
    const { item}=this.props;     
    item.update(this.state.name);
  }
  changeHandler=(e)=>{
    this.setState({name:e.target.value})
  }
  cancel=()=>{
    this.props.item.isEdit=false;
  }
  render(){
    
    return (
      <div>
        <input onChange={this.changeHandler}  type="text" value={this.state.name}/>
        <button onClick={this.saveHandler}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
      </div>
    )
  }
}