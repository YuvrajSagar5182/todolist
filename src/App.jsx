import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import AddTodo from './components/Todos/AddTodo';
import ToDoList from './components/Todos/TodoList';
import EditTodo from './components/Todos/EditTodo';
// import { fetchTodos, addTodos, deleteTodo, updateTodo } from './utils/fetchData';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {index:true, element: <HomePage />},
      { path: 'todos', 
        element: (
        <>
        <AddTodo title="Add a To-Do" buttonText='Add'/>
        <ToDoList/>
        </>
        ),
       
        children: [
          {
           path: ':id', 
           element: <EditTodo/>
          }

        ]
     },
    ],
  },
]);



  
function App() {
  return (
    <>
      {/* {edit && <EditTodo editTodo={editData} todo={todo} setEdit={setEdit}/>}
      <AddTodo AddNewTodo={addTodoHandler} title="Add a To-Do" buttonText='Add'/>
      {(anyTodoAvaialble) && <ToDoList todos={todoList} deleteTodo={deleteTodoHandler} editTodo={editTodoHandler}/>}
      {(!anyTodoAvaialble) && <p style={paraStyles}>No TO-DO's Available 😉!!</p>} */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
