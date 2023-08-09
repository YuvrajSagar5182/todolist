import { Link , Outlet} from 'react-router-dom';
import { useContext } from 'react';
import Card from '../UI/Card';
import classes from './TodoList.module.css';
import { TodoContext } from '../context/todo-context';
import LoadingComponent from '../UI/LoadingComponent';
const paraStyles = {
  margin: '2rem auto',
  width: '90%',
  maxWidth: '40rem',
  background: '#4f005f',
  padding: '1rem',
  color: 'white',
  border: '1px solid #ccc',
  borderRadius: '0.6rem'
}



const ToDoList = (props) => {

  const ctx = useContext(TodoContext);
  const {todoList , deleteTodo, editTodoHandler, isloading} = ctx;
  console.log(todoList);


  const mainUL = <>
{<ul>
        <div className={classes.header}>
        <h2>Your To-Do's</h2>
        </div>
        {todoList.map((todo) => (
          <li key={todo._id}>
         {todo.todo}
         <span className={classes.iconbuttons}>

       <Link to={`${todo._id}`}> <i className={'bx bxs-edit-alt' }
        onClick={() => {editTodoHandler(todo._id)}}></i></Link>
        
        <i className={`bx bxs-trash-alt`}  
        onClick={() => {deleteTodo(todo._id)}}>
        </i>
        </span>  
    </li>
  ))
  }   
</ul>}

  </>
  

  return (
  <>
  {isloading && < LoadingComponent/>}
  {!isloading && todoList.length === 0 && <p styles={paraStyles}>Nothing to Show</p> }
  {!isloading && todoList.length > 0 && 
  <Card className={classes.todos}>
      {mainUL}
      <Outlet></Outlet>
    </Card>
  }

  </>
    
  );
};

export default ToDoList;
