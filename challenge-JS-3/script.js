const url = 'https://pokeapi.co/api/v2/pokemon';

function getPokemon(id) {
  return fetch(`${url}/${id}`)
    .then(data => data.json())
    .then(data => data); 
}

function  getImageID(id){
    console.log(id);
    const imageString = '000' + id;
    return imageString.slice (-3);
}
function search() {
    const pokemonId = document.getElementById('pokemon-id').value;
    const id = getImageID(pokemonId); 
    
    getPokemon(pokemonId).then(data => {
      if (data) {
        const pokemonInfoDiv = document.getElementById('pokemon-info');
        pokemonInfoDiv.innerHTML = `
        <img class ="hide" id="hide" src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"}>
          <p id='name'></p>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
          <button id= "button1" onclick="checkButton(this)"></button>
          <button id= "button2" onclick="checkButton(this)"></button>
          <button id= "button3" onclick="checkButton(this)"> </button>
        `; 
        NameRandom(data.name);
      }
    });
  }


  

  function NameRandom(nemPokemon)
  {
   let buttons=[document.getElementById('button1'),document.getElementById('button2'),document.getElementById('button3')];
   let NumberRandom=Math.floor(Math.random() * 3);

   buttons[NumberRandom].innerHTML=nemPokemon;

   for(let index=0;index<3;index++)
   {
    if(index!=NumberRandom)
    {
      let idRandom=Math.floor(Math.random() * 999+1);
      getPokemon(idRandom).then(data => {
        buttons[index].innerHTML=data.name;
      });
      
   }
   }
  }

  function checkButton(button)
  {
    const pokemonId = document.getElementById('pokemon-id').value;
   var buttonValue=button.innerHTML;
   //document.getElementById('name').innerHTML=buttonValue;
   
    getPokemon(pokemonId).then(data => {
      if(button.innerHTML===data.name)
      {
         document.getElementById('name').innerHTML=buttonValue;  
         showMessage("congratulations!!, you have found the pokemon");
        document.getElementById('hide').style.filter='brightness(1)';
      }
      else
      { 
        showMessage("it's not the pokemon");
      }
      });
}


function showMessage(message)
{
  const messagediv=document.getElementById("alert");
  document.getElementById('message').innerHTML=message;
  messagediv.style.display='block';
}
 
function closeAlert()
{
    const messagediv=document.getElementById("alert");
    messagediv.style.display='none';
}