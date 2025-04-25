const form = document.getElementById('form');

// Function to generate a new user ID
function generateUserId() {
    const prefix = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter A-Z
    const number = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    return `${prefix}${number}`;
}

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    console.log(event.target.name.value); // Log the name field value
    console.log(event.target.email.value); // Log the email field value
    console.log(event.target.password.value); // Log the password field value
    console.log(event.target['user-id'].value); // Log the user ID field value

    event.target.reset(); // Reset the form fields

    // Regenerate the user ID after resetting the form
    document.getElementById('user-id').value = generateUserId();
});

// Generate the initial user ID on page load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('user-id').value = generateUserId();
});