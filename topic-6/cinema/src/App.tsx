
import React from 'react';
import Cinema from './Cinema';

function App() {
  return (
    <div style={{
    }}>
      <h1>Cinema Seat Reservation</h1>
      <Cinema columns={5} rows={5} />
    </div>
  );
}

export default App;
