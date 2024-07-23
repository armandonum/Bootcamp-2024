import './App.css';
import {useState} from 'react';
// function sayHello(name:string) : string
// {
//     return "Hello " + name;

// }

// function mybutton()
// {
//     const title="my button";
//     const className=Math.random() > 0.5 ? "button2" : "button";

//     return  <button className={className}>{sayHello(title)}</button>
// }
type Props = {
    alertMsg: () => void;
    title: string;
    count: number;
}


function MyButton({alertMsg, title , count}: Props)
{
    return <>
    <button  onClick={alertMsg}> {title}
    </button>
    <p>{count}</p>
    
    </>

   

}

export default MyButton;