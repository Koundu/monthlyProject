/*Recieving the data and storing in the variable*/
const searchButton = document.getElementById("search-button");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b85fac9574msh7107ecedd95de33p12b3dbjsn6630bdc18d8b',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

//Coding starts from Here

// window.addEventListener('DOMContentLoaded',()=>{//This is to make HTML Document fully loaded before running the JS Code
// searchButton.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const location = document.getElementById("search-input").value;
//     const checkIn = document.getElementById("checkIn").value;
//     const checkOut = document.getElementById("checkOut").value;
//     const guests = document.getElementById("guestCount").value;
//     console.log(location,checkIn,checkOut,guests);
//     fetch(`https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout={checkOut}&adults=${guests}&children=0&infants=0&pets=0&page=1&currency=USD`,options)
//         .then(res => res.text())
//         .then(data=>{
//             // const listingContainer = document.getElementById("listings-container");
//             // //Clearing the previous listings
//             // listingContainer.innerHTML = "";
//             // //Appending new Listings
//             // data.listings.forEach(listing =>{
//             //     const listingCard = createListingCard(listing);
//             //     listingContainer.appendChild(listingCard);
//             // })
//             console.log(data);
//         })
//         .catch(error => console.log('Error:',error))
// })
// })

// function createListingCard(listing){
//     const listingCard = document.createElement("div");
//     listingCard.classList.add("listing-card");
//     listingCard.innerHTML = `
//     <img src="${listing.image}" alt="${listing.title}">
//     <div class="listing-info">
//         <h2>${listing.title}</h2>
//         <p>${listing.propertyType} · ${listing.beds} beds · ${listing.bathrooms} bathrooms</p>
//         <p>${listing.price} per night</p>
//         <p>${listing.location}</p>
//         <p>Amenities: ${listing.amenities.join(", ")}</p>
//     </div>
//     `;
    
//     return listingCard;
// }

const url = 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination?query=delhi&country=INDIA';


fetch(url,options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(Error => console.log(Error))