function login() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" && password === "") {
        window.location.href="match.html";
        alert("Login successful!");
    } 
    
    else {
        showNotification("Invalid username or password");
    }
}

function showNotification(message) {
    
    var notificationDiv = document.createElement("div");
    notificationDiv.classList.add("notification");
    notificationDiv.textContent = message;

    
    var usernameInput = document.getElementById("username");
    usernameInput.parentNode.insertBefore(notificationDiv, usernameInput);
}

function showNotification(message) {
    
    var notificationDiv = document.createElement("div");
    notificationDiv.classList.add("notification");
    notificationDiv.textContent = message;

    var usernameInput = document.getElementById("username");
    usernameInput.parentNode.insertBefore(notificationDiv, usernameInput);

    void notificationDiv.offsetWidth;

    notificationDiv.classList.add("show");

    setTimeout(function () {
        notificationDiv.remove();
    }, 3000);
}
