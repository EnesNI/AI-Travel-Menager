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