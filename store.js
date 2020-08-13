import {observable} from 'mobx';
import { create, persist } from 'mobx-persist'

class Item{
  @observable name='';
  @observable isEdit=false;
  constructor(name){
    this.name=name;
    this.isEdit=false;
  }
  update(value){
    this.name=value;
    this.isEdit=false;
  }
}

class Store{
  @persist('list', Item) @observable fruits=[];
  constructor(){
    this.fruits.push(new Item('Banana'));
    this.fruits.push(new Item('Orange'));
    //create({})('store', this).then(()=>console.log('hydrated'))
  }

  add(value){    
    this.fruits.push(new Item(value));
  }  
  remove(item){
    this.fruits=this.fruits.filter(_=>_!==item);
  }
  
}

export default new Store();
