import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { completed: false, title: 'Task #1' },
    { completed: false, title: 'Task #2' },
    { completed: false, title: 'Task #3' },
  ]);
  const [newItemTitle, setNewItemTitle] = useState('');

  const handler = (e) => {
    setNewItemTitle(e.target.value);
    console.log(newItemTitle);
  }

  const newItem = (e) => {
    if (e.key === 'Enter') {
      const newTodos = todos.map(todo => {
        return {
          ...todo,
        }
      });

      newTodos.push({
        completed: false,
        title: newItemTitle,
      });

      setTodos(newTodos);
      setNewItemTitle('');
    }
  }

  const toggle = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      const isCompleted = todos[todoIndex].completed;

      return {
        ...todo,
        completed: (index === todoIndex) ? !isCompleted : isCompleted
      };
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return <li className={todo.completed ? 'completed' : ''} key={index} onClick={() => toggle(index)}>{todo.title}</li>
        })}
      </ul>
      <h2>{newItemTitle}</h2>
      <input type="text" value={newItemTitle} onChange={handler} onKeyDown={newItem} />
    </div>
  )
}
export default App;