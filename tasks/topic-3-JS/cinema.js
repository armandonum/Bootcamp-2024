class Seat {
    #isAvailable
    constructor() 
    {
      this.#isAvailable = true;
    }
  
    Reserve()
    {
      if(this.#isAvailable)
      {
        this.#isAvailable=false;
        return true;
      }
      return false;
    }
    
  
    getIsAviable()
    {
      return this.#isAvailable;
    }
  }
  
  class Cinema {
    #columns;
    #rows;
    #seats;
    
    constructor(columns, rows) 
    {
      this.#columns= columns;
      this.#rows= rows;
      this.#seats=[];
      
     
     for(let row=0; row < this.#columns ; row++)
      {
        let row=[]
        for (let column=0;column <  this.#rows ; column ++ )
        {
          row.push(new Seat())  ;
        }
        this.#seats.push(row)
      }
    }
    
    Reserve(column, row) 
    {
      if ( column < this.#columns && row < this.#rows) {
        if (this.#seats[row][column].Reserve()) {
          console.log("Seat at column "+column+", row "+row+" reserved.");
        } else {
          console.log("Seat at column"+column+", row "+row+"  IS ALREADY reserved.");
        }
      } else {
        console.log("Seat not exist");
      }
    }
  
    ShowCinema()
    {
     var result="\n";
     let name=["A","B","C","D","E"];
      for(let row=0; row < this.#columns ; row++)
      {
        for (let col=0 ;col < this.#rows  ;  col++)
        {
          if(this.#seats[row][col].getIsAviable())
          {
             result+=  "   O|¬ "+ name[row]+(col);
          }
          else
          {
             result+=  "   X|¬ "+ name[row]+(col);
          }
            
        }
        result+=" \n";
      }
      console.log(result);
    }
  
  }
  
  const cine = new Cinema(5,5);
  cine.Reserve(0,0);
  cine.ShowCinema();
  
  cine.Reserve(0,2);
  cine.ShowCinema();
  
  cine.Reserve(0,0);
  cine.ShowCinema();
  
  cine.Reserve(2,2);
  cine.ShowCinema();
  
  cine.Reserve(9,2);
  cine.ShowCinema();