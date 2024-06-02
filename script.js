document.addEventListener("DOMContentLoaded", function () {
    const cars = [
        { 
            name: "Land Rover Range Rover Sport 2015 3.0L V6 Supercharged HSE", 
            type: "Range Rover", 
            image: "photo/Land Rover Range Rove.jpg", 
            details: {
                year: 2019,
                color: "white",
                price: "100000",
                Daily_rent:70,
            }
        },
        { 
            name: "Mercedes-Benz E-Class W213", 
            type: "Mercedes", 
            image: "photo/marr.jpg", 
            details: {
                year: 2022,
                color: "white",
                price: "111000",
                Daily_rent:50,
            }
        },
        { 
            name: "Hyundai IconiQ 2018 Hybrid", 
            type: "Hyundai", 
            image: "photo/Hyundai IONIQ.jpg", 
            details: {
                year: 2020,
                color: "white",
                price: 80000,
                Daily_rent:40,

            }
        },
        { 
            name: "Red Audi S7 Sportback", 
            type: "Audi", 
            image: "photo/Audi .jpg", 
            details: {
                year: 2019,
                color: "Red",
                price: 95000,
                Daily_rent:45,

            }
        },
        { 
            name: "Black BMW 740Li", 
            type: "BMW", 
            image: "photo/Bmw.jpg", 
            details: {
                year: 2019,
                color: "Black",
                price: 120000,
                Daily_rent:55,

            }
        },
        { 
            name: "Toyota Avalon Hybrid 2015", 
            type: "Toyota", 
            image: "photo/Toyota .jpg", 
            details: {
                year: 2020,
                color: "white",
                price: 110000,
                Daily_rent:45,

            }
        },
        { 
            name: "Opel Insignia 2018 High Line", 
            type: "Opel", 
            image: "photo/Opel Insignia .jpg", 
            details: {
                year: 2021,
                color: "Red",
                price: 85000,
                Daily_rent:43,

            }
        },
        { 
            name: "Volkswagen Passat 2016 1.8T SE", 
            type: "Volkswagen", 
            image: "photo/Volkswagen Passat.jpg", 
            details: {
                year: 2020,
                color: "white",
                price: 90000,
                Daily_rent:45,

            }
        },
        { 
            name: "Kia Sportage 2019", 
            type: "Kia", 
            image: "photo/Kia.jpeg", 
            details: {
                year: 2019,
                color: "white",
                price: 10000,
                Daily_rent:50,

            }
        },
        { 
            name: "Jeep Grand Cherokee 2016", 
            type: "Jeep", 
            image: "photo/Jeep Grand Cherokee 2016.jpg", 
            details: {
                year: 2016,
                color: "white",
                price: 120000,
                Daily_rent:55,
            }
        },
        { 
            name: "Citroen C5 Aircross model 2023", 
            type: "Citroen", 
            image: "photo/Citroen C5 Aircross model 2023.jpg", 
            details: {
                year: 2023,
                color: "white",
                price: 130000,
                Daily_rent:60,

            }
        },
        { 
            name: "Mitsubishi Lancer Evolution 2016", 
            type: "Lancer", 
            image: "photo/Mitsubishi Lancer Evolution 2016.jpg", 
            details: {
                year: 2016,
                color: "white",
                price: 105000,
                Daily_rent:58,
                

            }
        },
    ];
    

    const carTypeSelect = document.getElementById("carType");
    const carsContainer = document.getElementById("carsContainer");

    displayCars(cars);

    carTypeSelect.addEventListener("change", function () {
        const selectedType = carTypeSelect.value;
        const filteredCars = filterCarsByType(cars, selectedType);
        displayCars(filteredCars);
    });

    function displayCars(carsToShow) {
        carsContainer.innerHTML = "";
        carsToShow.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.classList.add("car");
            carDiv.innerHTML = `
                <h3>${car.name}</h3>
                <img src="${car.image}" alt="${car.name}">
                <p class="type-icon">${getTypeIcon(car.type)}</p>
                <p> type car: ${car.type}</p>
                <p>year: ${car.details.year}</p>
                <p>color: ${car.details.color}</p>
                <p>price: ${car.details.price} $</p>
                <p>Daily rent: ${car.details.Daily_rent} $<p>
                <a href="Book a car/sss.html " class="book-now-link"> check out </a>
            `;
            carsContainer.appendChild(carDiv);
        });
    }

    function getTypeIcon(type) {
        switch (type) {
            case "Lancer":
                return "";
            case "":
                return "";
            default:
                return "";
        }
    }

    function filterCarsByType(allCars, type) {
        if (type === "all") {
            return allCars;
        } else {
            return allCars.filter(car => car.type === type);
        }
    }
 
    
});
