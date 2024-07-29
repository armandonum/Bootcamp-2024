import "./index.css";
import { useState, useEffect, useRef } from "react";

export default function App() {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef(null);

  const myInput = useRef(null);

  useEffect(() => {
    focusInput();
  }, []);


   // useEffect(() => {
  //   const intervals= setInterval(() => {
  //     setCount(count=> count+1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervals)
  //   }
  // },[])

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalRef.current);
            setIsActive(false);
          } else {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }
  , [isActive, minutes, seconds]);
  

  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsActive(true);
    }
  
  };
  const stopTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };
  const resetTimer = () => {
    setMinutes(e.target.value);
    setSeconds(0);
  };



  const setMinute= (e) => {
    setMinutes(e.target.value);
  };

  const focusInput = () => {
    myInput.current.focus();
    //document.getElementById("input").focus();
  }
  
const add1 = () => {
  setMinutes(minutes+1);
}

  const updateFocusCounters = () => {
    onFocusCounter.current = onFocusCounter.current + 1;
    console.log("Focus Counter",onFocusCounter.current);
}

  return (
    <div className="container">

      <input type="number" 
      id="input" 
      onChange={setMinute} 
      placeholder="enter minutes" 
      ref={myInput}
      onFocus={updateFocusCounters}
      />

      <button onClick={focusInput}> focus</button>
      <button>set timer</button>
      <h1>Timer</h1>
      <span> {minutes} mins</span>
      <span> {seconds} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>

        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
