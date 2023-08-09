import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../UI/Card"
import Button from "../UI/Button";
import { TodoContext } from "../context/todo-context";


import classes from './EditTodo.module.css';
import LoadingComponent from "../UI/LoadingComponent";

const EditTodo = () => {

    const navigate = useNavigate(); 
    const params = useParams();
    const ctx = useContext(TodoContext)
    const {updateTodo, editTodo, isloading} = ctx
    const [data, setData] = useState(editTodo.todo);
  
    const {id} = params;

    const inputChangeHandler = (evt) => {
        setData(evt.target.value)
    }

    const cancelHandler = () => {
      navigate('..')

    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log()

        if (!(data.length)){
          console.log('Cant update NULL VALUES')
          return cancelHandler();
        }

        updateTodo(id, data);
        navigate('..')


    }

    return(
      <>
      
        {isloading && <LoadingComponent />}
        {!isloading &&   <> 
          <div className={classes.backdrop} onClick={() => cancelHandler()}/>
        <Card className={`${classes.modal} `}>
          <header className={classes.header}>
            <h2>Editing To-Do</h2>
          </header>
          <div className={classes.content}>
          <form onSubmit={submitHandler}>
          <label htmlFor="todo" className={classes.inputLabel}>Enter new Title</label>
            <input className={`${classes.input}`}
            type="text" value={data} 
            onChange={inputChangeHandler} 
            />
            <Button type="submit">Submit</Button>
        </form>
          </div>
        </Card>    
        </>}
        </>    
  )
}

export default EditTodo;
