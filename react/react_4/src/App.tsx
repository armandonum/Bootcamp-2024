import { useState } from 'react'

import './App.css'
import Panel  from './components/Panel'
function App() {
    const [activeIndex, setActiveIndex]=useState(0);

  return (
    <>
    <h2> Almaty, Kazakhstan</h2>

    <Panel
    title="About"
    isActive={activeIndex===0}
    onShow={()=> setActiveIndex(0)}
    >
      asdasdasdasasdas


    </Panel>

    <Panel

    title="Etymology"
    isActive={activeIndex===1}
    onShow={()=> setActiveIndex(1)}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Vitae cumque beatae aliquam delectus praesentium accusamus, et repudiandae voluptatibus 
       aperiam temporibus. Autem adipisci, hic iure modi eos veritatis recusandae ullam minima.

    </Panel>
    </>
  )
}

export default App
