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
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            let old_data = props.data
            let new_item = {key: getKey(), text: e.target.value, done: false}
            props.func([...old_data, new_item]);
            e.target.value = "";
            props.func2([...old_data, new_item]);
          }
        }}
        >
      </input>
    </div>
  );
}

export default Input;
