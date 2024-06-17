function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function showSignupForm() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function signup() {
    var username = document.getElementById('signup-username').value;
    var EMAIL = document.getElementById('signup-EMAIL').value;
    var password = document.getElementById('signup-password').value;

   
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful for username: ' + username);
    showLoginForm();
}

function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // if the entered username and password match the stored ones
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
}