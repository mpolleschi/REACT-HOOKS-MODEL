import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { supabase } from './supabaseClient';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Carica i todo da Supabase all'avvio
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('priority', { ascending: true });
    if (!error) setTodos(data);
  };

  const handleAdd = async () => {
    if (input.trim() !== '' && priority !== '') {
      if (editingId !== null) {
        // Update
        await supabase
          .from('todos')
          .update({ text: input, priority: Number(priority) })
          .eq('id', editingId);
        setEditingId(null);
      } else {
        // Insert
        await supabase
          .from('todos')
          .insert([{ text: input, priority: Number(priority) }]);
      }
      setInput('');
      setPriority('');
      fetchTodos();
    }
  };

  const handleRemove = async (id) => {
    await supabase.from('todos').delete().eq('id', id);
    fetchTodos();
    if (editingId === id) {
      setEditingId(null);
      setInput('');
      setPriority('');
    }
  };

  const handleEdit = (id) => {
    const todo = todos.find(t => t.id === id);
    setInput(todo.text);
    setPriority(todo.priority);
    setEditingId(id);
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Aggiungi o modifica una attività"
        style={{ marginRight: '5px' }}
      />
      <input
        type="number"
        value={priority}
        onChange={e => setPriority(e.target.value)}
        placeholder="Priorità"
        min="1"
        style={{ width: '80px', marginRight: '5px' }}
      />
      <button onClick={handleAdd}>
        {editingId !== null ? 'Aggiorna' : 'Aggiungi'}
      </button>
      <TodoList
        todos={todos}
        onRemove={handleRemove}
        onEdit={handleEdit}
        useId={true}
      />
    </div>
  );
}

export default App;