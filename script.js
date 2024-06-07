// Function to handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const savedUser = localStorage.getItem(username);
    if (savedUser) {
        const savedPassword = JSON.parse(savedUser).password;
        if (savedPassword === password) {
            alert('Login successful!');
            // For demonstration purposes, redirecting to a success page
            window.location.href = 'home.html';
        } else {
            document.getElementById('login-error').textContent = 'Invalid password';
        }
    } else {
        document.getElementById('login-error').textContent = 'User not found';
    }
});

// Function to handle sign up
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const savedUser = localStorage.getItem(username);
    if (savedUser) {
        document.getElementById('signup-error').textContent = 'Username already exists';
    } else {
        localStorage.setItem(username, JSON.stringify({ username, password }));
        alert('Sign up successful! Please log in.');
        window.location.href = 'index.html'; // Redirect to login page after sign up
    }
});
