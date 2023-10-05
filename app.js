/*Recieving the data and storing in the variable*/

//Coding starts from Here

window.addEventListener('DOMContentLoaded',()=>{//This is to make HTML Document fully loaded before running the JS Code
const searchButton = document.querySelector("button");
searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const location = document.getElementById("search-input").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const guests = document.getElementById("guestCount").value;
    console.log(location,checkIn,checkOut,guests);
    fetch(`https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout={checkOut}&adults=${guests}&children=0&infants=0&pets=0&page=1&currency=USD`,options)
        .then(res => res.text())
        .then(data=>{
            const listingContainer = document.getElementById("listings-container");
            //Clearing the previous listings
            listingContainer.innerHTML = "";
            //Appending new Listings
            data.listings.forEach(listing =>{
                const listingCard = createListingCard(listing);
                listingContainer.appendChild(listingCard);
            })
            console.log(data);
        })
        .catch(error => console.log('Error:',error))
})
})

window.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", async (e) => { // Add async keyword here
    e.preventDefault();
     const searchInput = document.getElementById("search-input").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const guests = document.getElementById("guestCount").value;
        const url = `https://airbnb13.p.rapidapi.com/search-location?location=${searchInput}&checkin=${checkIn}&checkout=${checkOut}&adults=${guests}&page=1&currency=USD`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b85fac9574msh7107ecedd95de33p12b3dbjsn6630bdc18d8b',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data.results);
            console.log(`<img src="${data[0].image}" alt="${data[0].name}">`);

            const listingsContainer = document.getElementById("listings-container");

            // Clear previous listings
            listingsContainer.innerHTML = "";

            // Append new listings
            data.results.forEach((listing) => {
                const listingCard = createListingCard(listing);
                listingsContainer.appendChild(listingCard);
            });
        } catch (error) {
            console.error(error);
        }

    });
});



function createListingCard(listing){
    console.log(`<img src="${listing.image.value}" alt="${listing.name}">`);
    const listingCard = document.createElement("div");
    listingCard.classList.add("listing-card");
    listingCard.innerHTML = `
    <div class="listing-info">
        <h2>${listing.name}</h2>
        <p>${listing.type} · ${listing.beds} beds · ${listing.bathrooms} bathrooms</p>
        <p>${listing.price} per night</p>
        <p>${listing.location}</p>
        <p>Amenities: ${listing.previewAmenities.join(", ")}</p>
    </div>
    `;
        // Create a marker for this listing on the map
        new google.maps.Marker({
            position: { lat: listing.latitude, lng: listing.longitude },
            map,
            title: listing.title
        });
    
    return listingCard;
}

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 }, // Centered at some default location
        zoom: 8
    });
}