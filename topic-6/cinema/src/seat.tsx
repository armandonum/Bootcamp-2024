import React, {useState} from "react";


function Seat({row,column, reserveSeat}: {row: number, column: number, reserveSeat: Function}) 

{

    const [reserved, setReserved] = useState(false);

    const handleReserve=() =>
    {
        if(reserved)
        {
            setReserved(false);
            reserveSeat(row, column);
        }
    };
    
    return(
        <div
        style={{
            display: 'inline-block',
            margin: '5px',
            padding: '10px',
            border:'3px solid black',
            background: reserved ? "url('./assets/seatReserved.png')" : "url('./assets/seat.png')",
            cursor: reserved ? 'pointer' : 'not-allowed',

        }}  
        onClick={handleReserve}>{reserved ? "url('./assets/seatReserved.png')" : "url('./assets/seat.png')"} | {String.fromCharCode(65 + row)}{column}

        </div>
    )

   
}




// import React, { useState } from 'react';

// function Seat({ row, column, reserveSeat }: { row: number, column: number, reserveSeat: Function }) {
//   const [isAvailable, setIsAvailable] = useState(true);

//   const handleReserve = () => {
//     if (isAvailable) {
//       setIsAvailable(false);
//       reserveSeat(row, column);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'inline-block',
//         margin: '5px',
//         padding: '10px',
//         border: '1px solid black',
//         backgroundColor: isAvailable ? 'green' : 'red',
//         cursor: isAvailable ? 'pointer' : 'not-allowed',
//       }}
//       onClick={handleReserve}
//     >
//       {isAvailable ? 'O' : 'X'} | {String.fromCharCode(65 + row)}{column}
//     </div>
//   );
// }

// export default Seat;
