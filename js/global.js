import React from 'react'
import ReactDOM from 'react-dom'
import TodosPage2 from '../components/Todos'

// Your code goes here
var arrayOfInputs = []
var userStuff = document.getElementById('userType')

function pushTheData(){
  arrayOfInputs.unshift(userStuff.value)
  userStuff.value = ''
  console.log(arrayOfInputs)
  renderView(arrayOfInputs)
  document.getElementById('userType').placeholder='Ok!  What else needs to get done?'
}

document.getElementById('userType').addEventListener('keypress', function(){
  if (event.key === 'Enter'){pushTheData()}})

document.getElementById('addButton').addEventListener('click', pushTheData)

window.renderView = function(data){
  ReactDOM.render(
    <TodosPage2 arrayData={data} />,
    document.getElementById('todos'))
}
//
// const TodosPage2 = (props) => {
//   const TodoItems = props.arrayData.map((item, i) => {
//     return <TodoItemPage3 data={item} key={i} />
//   })
//
//   return <div>
//     {TodoItems}
//   </div>
// }
//
// const TodoItemPage3 = (props) =>
// (
//     <p>{props.data}</p>
// )
