import React from 'react';

function TodoList({ todos = [], onRemove, onEdit, useId }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Attività</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Priorità</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Azioni</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{todo.text}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{todo.priority}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
              <button onClick={() => onEdit(useId ? todo.id : todo.idx)} style={{ marginRight: '5px' }}>
                Modifica
              </button>
              <button onClick={() => onRemove(useId ? todo.id : todo.idx)}>
                Rimuovi
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;