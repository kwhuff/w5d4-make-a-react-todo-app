import React, { Component } from 'react'
import TodoItemPage3 from './TodoItem'
//WE SET arrayData EQUAL TO OUR arrayOfInputs IN OUR FUNCTION renderView() WE CALLED UNDER OUR EVENTLISTENERS IN global.js!!!!!!!!
const TodosPage2 = (props) => {
  const TodoItems = props.arrayData.map((item, i) => {
    return <TodoItemPage3 dataAttribute={item} key={i} />
  })

  return <div>
    {TodoItems}
  </div>
}

export default TodosPage2
