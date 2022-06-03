/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/

function TodoItem(props) {

  function handleClick() {
    
    let items = props.data
    let putItems = props.func

    let new_items = items.map(item => {
      if (item.key == props.item.key) {
        item.done = !item.done
      }
      return item
    })
    putItems(new_items)
  }
    
  return (
    props.item.done ?
    <label className="panel-block has-text-grey-light">
      <input checked type="checkbox"/>
      {props.item.text}
    </label>
    :
    <label className="panel-block" onClick={handleClick}>
      <input type="checkbox"/>
      {props.item.text}
    </label>
  );
}

export default TodoItem;