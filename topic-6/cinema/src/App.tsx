
import React from 'react';
import Cinema from './Cinema';

function App() {
  return (
    <div>
      <h1>Seat Reservation</h1>
      <Cinema columns={5} rows={5} />
    </div>
  );
}

export default App;
