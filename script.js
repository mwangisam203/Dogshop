const dogsContainer =document.getElementById('dogsContainer')


//fetch and display diffrent types of dogs
function displayDogs(){
    fetch('http://localhost:5000/dogProfiles')
    .then(response => response.json())
    .then((data)=>{
        (data);
        data.forEach(dogProfile => {
            const cardsContainer = document.createElement('div');
            cardsContainer.classList.add('dogsCard')
            cardsContainer.innerHTML=`
            <h1>${dogProfile.breed}</h1>
            <img src="${dogProfile.image}" alt="${dogProfile.breed}">
            <p>Gender:${dogProfile.gender}</p>
            <h4>Age:${dogProfile.age}</h4>
            <h2>Price = ${dogProfile.cost}</h2>
            <button class="order-button">Order</button>
            
            `;
            const orderButton = cardsContainer.querySelector('.order-button');
            orderButton.addEventListener('click',function (){
                   alert(`succesfull order placed for ${dogProfile.breed}`);
            })
            dogsContainer.append(cardsContainer)
        });
    })
}
displayDogs();