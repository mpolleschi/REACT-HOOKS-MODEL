import { useState } from 'react';

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (todoToRemove) => {
        setTodos(todos.filter(todo => todo !== todoToRemove));
    };

    const getTodos = () => {
        return todos;
    };

    return {
        addTodo,
        removeTodo,
        getTodos
    };
};

export default useTodos;