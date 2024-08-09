

import { useState } from 'react';
import List from './Components/List';
import imageContext from './context/context';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 500 : 150;
  return (
    <imageContext.Provider value={imageSize}>
    
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
   

    </imageContext.Provider>

  )
}
