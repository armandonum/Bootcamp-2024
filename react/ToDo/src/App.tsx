import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/ToDo'

type ToDoType={
  text: string;
  done: boolean;
}
const initialToDos: ToDoType[] = [
  { text: 'Learn React', done: false },
  { text: 'Learn TypeScript', done: false },
  { text: 'Learn GraphQL', done: false },
];

function App() {
  const [todos, setTodos] = useState<ToDoType[]>(initialToDos);
  const [text, setText] = useState('');
  const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { text, done: false }]);
    setText('');
  };

  return (
    <>
      <input onChange={editText} type="text" value={text} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, index) => (
        <ToDo
          key={index}
          title={todo.text}
          isDone={todo.done}
          onEdit={(text) => console.log(text)}
          onDelete={() => console.log('delete')}
        />
      ))}
    </>
  );
}

export default App;
