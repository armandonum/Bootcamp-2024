import { useState } from "react";

import './App.css';

type ToDoType={
  text:string;
  id: number;
  completed:boolean;
}

function App(){
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState<string>('');
  const[toDos,setToDos]=useState<ToDoType[]>([]);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputText(e.target.value);
  }
  const addToDo =() => 
    {
       setToDos([...toDos,
        {
          text: inputText,
          completed: false,
          id: 1
        }
       ]);
       console.log(toDos);
    }

  return (
    <>
      <button onClick={addToDo} >
        count is {count}
      </button>
      <input type="text" value={inputText} onChange={handleChange}/>

      <br />
      <br />

      <button onClick={addToDo}>
        Add todo
      </button>


      <ul>
        {
          toDos.map((toDos) => <li><p> {toDos.text}</p></li>) 
        }
      </ul>
    </>
  )
}



export default App;