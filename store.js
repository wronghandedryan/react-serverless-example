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
  @persist('list', Item) @observable FsfTeachers=[];
  constructor(){
    this.fsfTeachers.push(new Item('Kyle'));
    this.fsfTeachers.push(new Item('Chad'));
    this.fsfTeachers.push(new Item('Dave'));
    //create({})('store', this).then(()=>console.log(''))
  
  if(err) 
  console.log('No Rules!!!!!!');
  }
  add(value){    
    this.fsfTeachers.push(new Item(value));
  }  
  remove(item){
    this.fsfTeachers=this.fsfTeachers.filter(_=>_!==item);
  }
  
}

export default new Store();
