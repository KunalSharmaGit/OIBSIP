const todoList=[{
  name:"Task",
  description:"Short Description of Task"
}];
randerTodoList();
document.querySelector('.save')
  .addEventListener('click', () => {
    console.log("Clicked")
    addTodo();
  });
function addTodo(){
  const item = document.querySelector(".title");
  const description=document.querySelector(".description");
  todoList.push({
    name: item.value,
    description:description.value
  })
  item.value='';
  description.value='';
  randerTodoList();

}
function randerTodoList(){
  let todoListHTML='';

  for(let i=0; i<todoList.length;i++){
    const todoObject= todoList[i];
    const {name, description}= todoObject;
    const html=` 
    <div>${name}</div>
    <div>${description}</div>
    <button onclick="
    todoList.splice(${i},1);
    randerTodoList();
    " class="delete-todo-btn">Delete</button>
    `;
    todoListHTML+=html;
  }

  document.querySelector(".Todo").innerHTML= todoListHTML;
}