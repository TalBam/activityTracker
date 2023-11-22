import { displayErrorMessage, users, addUser, isUserNameExists, isEmailExists } from './users.model.js';
// console.log(activities);
console.log(users);
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const usernameInput = document.getElementById('userName').value;
    const passwordInput = document.getElementById('password').value;
    const user = users.find(user => user.userName === usernameInput && user.password === passwordInput);
    if (user) {
        console.log('Login successful!');
        window.location.href = 'index.html';
        localStorage.setItem("currentUserName", usernameInput);
    }
    else {
        displayErrorMessage('Invalid username or password. Please try again.');
    }
});
document.getElementById('signInForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const passwordVerify = document.getElementById('passwordVerify').value;
    if (password !== passwordVerify) {
        displayErrorMessage('Passwords do not match.');
        return;
    }
    if (isUserNameExists(userName)) {
        displayErrorMessage('Username already exists. Please choose another.');
        return;
    }
    if (isEmailExists(email)) {
        displayErrorMessage('email already in use.');
        return;
    }
    if (gender !== "male" && gender !== "female") {
        return;
    }
    const activityIds = [userName];
    const newUser = {
        firstName,
        lastName,
        age,
        gender,
        email,
        userName,
        password,
        activityIds
    };
    addUser(newUser);
    window.location.href = 'index.html';
    localStorage.setItem("currentUserName", userName);
});
