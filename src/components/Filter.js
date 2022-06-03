/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
import React, { useState } from 'react';

function Filter(props) {
  const [status, setStatus] = useState(0)
  
  function processClick(option) {
    setStatus(option)
    let items = props.data
    
    if (option == 0) {
      props.func(items)
    } else if (option == 1) {
      props.func(items.filter(item => !item.done))
    } else {
      props.func(items.filter(item => item.done))
    }
  }
  
  return (
    <div class="tabs is-centered">
      <ul>
        <li className={0 == status ? "is-active": ""} onClick={() => processClick(0)}>
          <a>全部</a>
        </li>
        
        <li className={1 == status ? "is-active": ""} onClick={() => processClick(1)}>
          <a>未完了</a>
        </li>
        
        <li className={2 == status ? "is-active": ""} onClick={() => processClick(2)}>
          <a>完了済み</a>
        </li>
      </ul>
    </div>
  );
}

export default Filter