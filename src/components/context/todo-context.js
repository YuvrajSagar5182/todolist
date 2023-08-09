import React, { useEffect, useState } from 'react';
import { fetchTodos, addTodos, deleteTodos, updateTodos } from '../../utils/fetchDataMongo'

export const TodoContext = React.createContext({

    todoList: [],
    editTodo: {},
    addTodo: (newTodo) => { },
    isloading: false,
    deleteTodo: (id) => { },
    editTodoHandler: (id) => { },
    updateTodo: (id, newTodo) => { }
});


const TodoProvider = props => {

    const [todoList, settodoList] = useState([]);
    const [editTodo, setEditTodo] = useState({})
    const [isloading, setIsLoading] = useState(false)

    useEffect(() => {
        const settingTodo = async () => {
            try {
                setIsLoading(true);
                const fetchedTodos = await fetchTodos();
                settodoList(fetchedTodos);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        };

        settingTodo();
    }, []);

    const addTodo = async (newTodo) => {
        try {
            setIsLoading(true)
            // console.log('Our new Todo ', newTodo);
            await addTodos(newTodo);
            // console.log(todos)

            const newTodoList = await fetchTodos()
            settodoList(newTodoList);
            setIsLoading(false);
            // console.log('Succeed in Adding Todo ')
        } catch (err) {
            console.error(err.message);
        }
    };

    const deleteTodo = async (prevId) => {
        try {
            setIsLoading(true)
            await deleteTodos(prevId);

            const newTodoList = await fetchTodos()
            settodoList(newTodoList);
            setIsLoading(false)
            // console.log('A TODO DELETED.. having ID:', prevId)
        }
        catch (err) {
            console.error(err)
        }
    };

    const updateTodo = async (id, editedTodo) => {
        try {
            setIsLoading(true)
            setEditTodo(id)
            await updateTodos(id, editedTodo);

            // await updateTodo(id, editedTodo)
            const newTodoList = await fetchTodos();
            settodoList(newTodoList)
            setIsLoading(false)
        }
        catch (err) {
            console.log(err.message)
        }
    }

    const editTodoHandler = (id) => {
        // console.log(editTodo);
        // console.log(id);
        // console.log(todoList)
        const currTodo = todoList.find(todo => todo._id === id);
        setEditTodo(currTodo);
        // console.log(currTodo);
    };


    return (
        <TodoContext.Provider
            value={{ todoList, isloading, editTodo, addTodo, deleteTodo, updateTodo, editTodoHandler }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider
