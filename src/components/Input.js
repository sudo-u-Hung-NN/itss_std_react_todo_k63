import React, { useState } from 'react';
import {getKey} from "../lib/util";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/

function Input(props) {
  return (
    <div className="panel-block">
      <input 
        className="input" 
        type="text" 
        placeholder="新しいタスクを入って" 
        onblur="getVal()" 
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            props.func(
              [...props.data, 
              {key: getKey(), text: e.target.value, done: false}]
            );
            e.target.value = "";
          }
          
        }}
        >
      </input>
    </div>
  );
}

export default Input;
