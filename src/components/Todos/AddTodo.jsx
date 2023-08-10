import React, { useState, useContext } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddTodo.module.css';
import { TodoContext } from '../context/todo-context';

const AddTodo = (props) => {
  const ctx = useContext(TodoContext)
  const [enteredTodo, setEnteredTodo] = useState('');
  const [error, setError] = useState();

  const addTodoHandler = (event) => {

    event.preventDefault();
    if (enteredTodo.trim().length === 0 ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid To Do (non-empty values).',
      });
      return;
    }
    //State-UP is done here!
    ctx.addTodo(enteredTodo);
    //TWO-WAY Binding.
    setEnteredTodo('');
  };

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };


  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addTodoHandler}>
          <label htmlFor="todo">{props.title}</label>
          <input
            id="todo"
            type="text"
            value={enteredTodo}
            onChange={todoChangeHandler}  
          />
          <Button type="submit">{props.buttonText}</Button>
          
        </form>
      </Card>
      
      
    </>
  );
};

export default AddTodo;
