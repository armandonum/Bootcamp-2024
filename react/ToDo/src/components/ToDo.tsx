import { useState } from "react"
import React from "react";

type Props=
{
    isDone : boolean;
    title: string;
    onEdit:  ( text: string)=> void ;
    onDelete: ()=> void;
}


function ToDo({ title, isDone, onDelete, onEdit }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(title);
    const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };
    const save = () => {
      onEdit(text);
      setIsEditing(false);
      setText('');
    };
  
    return (
      <div className="ToDo">
        <input type="checkbox" checked={isDone} />
        {!isEditing && <p>{title}</p>}
        {isEditing && <input onChange={editText} type="text" value={text} />}
        <button onClick={() => isEditing ? save() : setIsEditing(true)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
  
  export default ToDo;
  