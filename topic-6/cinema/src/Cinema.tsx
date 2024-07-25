
import React, { useState } from 'react';
import Seat from './seat';

function Cinema({ columns, rows }: { columns: number, rows: number }) {
  const [seats, setSeats] = useState(
    Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => true)
   
    )
  );

  const reserveSeat = (row: number, column: number) => {
    setSeats(prevSeats => {
      const newSeats = [...prevSeats];
      newSeats[row][column] = false;
      return newSeats;
    });
    console.log(`Seat at row ${row}, column ${column} reserved.`);
  };

  return (
    <div>
      {seats.map((row, rowIndex) =>
      <div>
        {
    
        row.map((isAvailable, columnIndex) => (
          <Seat
            key={`${rowIndex}-${columnIndex}`}
            row={rowIndex}
            column={columnIndex}
            reserveSeat={reserveSeat}
          />
        )) 
    }
      </div>
      )}
   </div>
  );
}



export default Cinema;
