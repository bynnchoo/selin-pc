import React from 'react';
import {Button} from 'antd';

const HelloWord = function({name}){
  const sayHi = function(event){

    alert("Hi,"+name)
  }

  return (
    <div><Button onClick={sayHi}>button</Button></div>
  )
}

export default HelloWord;