function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

function getBookedVenues() {
    return JSON.parse(localStorage.getItem("bookedVenues")) || {};
}

function saveBookedVenues(bookedVenues) {
    localStorage.setItem("bookedVenues", JSON.stringify(bookedVenues));
}


async function storeUserInDB(user) {
    try {
        let response = await fetch("http://localhost:5500/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        let data = await response.json();
        console.log("User saved in MongoDB:", data);
    } catch (error) {
        console.error("Error saving user to MongoDB:", error);
    }
}

function registerUser(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("Email already registered!");
        return;
    }

    let newUser = { username, email, password };
    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    storeUserInDB(newUser);

    alert("Registration successful!");
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Logged in successfully!");
        window.location.href = "previousvenues.html";
    } else {
        alert("Invalid email or password!");
    }
}

function bookVenue(venueName, address, capacity) {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        alert("Please log in to book a venue.");
        return;
    }

    let bookedVenues = JSON.parse(localStorage.getItem("bookedVenues")) || {};
    let userEmail = user.email;

    if (!bookedVenues[userEmail]) {
        bookedVenues[userEmail] = [];
    }

    if (bookedVenues[userEmail].some(venue => venue.venueName === venueName)) {
        alert("You have already booked this venue.");
        return;
    }

    bookedVenues[userEmail].push({ venueName, address, capacity });
    localStorage.setItem("bookedVenues", JSON.stringify(bookedVenues));

    alert("Venue booked successfully!");
    window.location.href = "previousvenues.html";
}
