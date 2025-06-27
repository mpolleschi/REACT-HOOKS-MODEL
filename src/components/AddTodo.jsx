import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Aggiungi una nuova attività"
            />
            <button type="submit">Aggiungi</button>
        </form>
    );
};

export default AddTodo;