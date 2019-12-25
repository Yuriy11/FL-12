let email = prompt("please enter your email");
let password = '';
let personVerified = false;
let passwordChangeAllowed = false;
if (!email) {
    alert("Canceled.")
} else if (email.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === "user@gmail.com") {
    password = prompt("please enter your password");
    if (!password) {
        alert("Canceled.");
    } else if (password === "userPassword") {
        personVerified = true;
    } else {
        alert("Wrong password");
    }
} else if (email === "admin@gmail.com") {
    password = prompt("please enter your password");
    if (!password) {
        alert("Canceled.");
    } else if (password === "adminPassword") {
        personVerified = true;
    } else {
        alert("Wrong password");
    }
} else {
    alert("I don't know you");
}

if (personVerified) {
    if (confirm("Do you want to change your password?")) {
        if (email === "user@gmail.com") {
            password = prompt("please repeat your current password");
            if (!password) {
                alert("Canceled.");
            } else if (password === "userPassword") {
                passwordChangeAllowed = true;
            } else {
                alert("Wrong password");
            }
        } else if (email === "admin@gmail.com") {
            password = prompt("please repeat your current password");
            if (!password) {
                alert("Canceled.");
            } else if (password === "adminPassword") {
                passwordChangeAllowed = true;
            } else {
                alert("Wrong password");
            }
        }
    } else {
        alert("You have failed the change.");
    }
}

if (passwordChangeAllowed) {
    let newPassword = prompt("please enter new password");
    if (!newPassword) {
        alert("Canceled.");
    } else if (newPassword.length < 6) {
        alert("It’s too short password. Sorry.");
    } else if (newPassword === prompt("please enter new password once more")) {
        alert("You have successfully changed your password.");
    } else {
        alert("You wrote the wrong password.");
    }
}