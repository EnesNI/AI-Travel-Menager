// Offers Form Submission
document.getElementById("offers-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const budget = document.getElementById("budget").value;
    const results = document.getElementById("offer-results");

    results.innerHTML = `
        <div class="offer">
            <h3>Package to ${destination}</h3>
            <p>Flights + Hotels starting from $${budget}!</p>
        </div>`;
});

// Login Form Validation
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert("Login Successful!");
        // Redirect or further logic
    } else {
        alert("Please fill in all fields.");
    }
});

// Signup Form Validation
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (name && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert("Signup Successful!");
            // Redirect or further logic
        } else {
            alert("Passwords do not match!");
        }
    } else {
        alert("Please fill in all fields.");
    }
});

