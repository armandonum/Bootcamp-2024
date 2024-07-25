import React, {useState} from "react";
import seatImage from './assets/seat.png';
import seatReservedImage from './assets/seatReserved.png';

function Seat({row,column, reserveSeat}: {row: number, column: number, reserveSeat: Function}) 

{

    const [reserved, setReserved] = useState(true);

    const handleReserve=() =>
    {
        if(reserved)
        {
            setReserved(false);
            reserveSeat(row, column);
        }
    };
    
    return(
        <div style={
            {
                display: 'inline-block',
                margin: '5px',
                padding: '10px',
                border: '1px solid black',
               
            }
        }>
        {column}
        <div
        style={{
            display: 'inline-block',
            margin: '5px',
            padding: '10px',
            border:'3px solid black',
            
            flexDirection: 'row',
            //  backgroundImage: reserved ? "url('./assets/seatReserved.png')" : "url('./assets/seat.png')",
            //backgroundColor: reserved ? 'green' : 'red',
            backgroundImage: `url(${reserved ? seatImage : seatReservedImage})`,
            backgroundSize: 'cover',
            cursor: reserved ? 'pointer' : 'not-allowed',


        }}  
        
         onClick={handleReserve}>
            {/* {reserved ? "url('./assets/seatReserved.png')" : "url('./assets/seat.png')"} | {String.fromCharCode(65 + row)}{column} */}
               {reserved ? 'O':'X'} | {String.fromCharCode(65 + row)}{column}


        </div>
        </div>
        
    )

   
}

export default Seat;



