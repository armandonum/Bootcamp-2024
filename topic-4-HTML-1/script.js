function generateCards(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const photoFile = document.getElementById('photo').files[0];
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const cardsContainer = document.getElementById('cardsContainer');
    
    cardsContainer.innerHTML = '<h1>Challenge-4</h1>'; 
    
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoURL = e.target.result;
            
            for (let i = 0; i < quantity; i++) {
                const cardHTML = `
                    <div class="poster">
                        <div class="head">
                            <span class="jala">Jala</span>
                            <span class="highlight"><img src="images/logo.png" alt="" style="width: 1.8rem;"></span>
                            <span class="oft">oft</span> 
                        </div>
                        
                        <div class="image-person"> 
                            <img src="${photoURL}" alt="Profile Picture">
                            <h1>${name}</h1>
                        </div>
                        <div class="foder">        
                            <h2>${position}</h2>
                        </div>
                    </div>
                `;
                cardsContainer.innerHTML += cardHTML;
                
            }
        };
        reader.readAsDataURL(photoFile);
    }
}