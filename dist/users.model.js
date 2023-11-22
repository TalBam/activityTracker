export const users = JSON.parse(localStorage.getItem('users') || '[]');
export function addUser(newUser) {
    users.push(newUser);
    updateLocalStorage();
}
export function isUserNameExists(username) {
    return users.some(user => user.userName === username);
}
export function isEmailExists(email) {
    return users.some(user => user.email === email);
}
// export function isUserCredentialsValid(userName: string, password: string): boolean {
//     return users.some(user => user.userName === userName && user.password === password);
//   }
export function updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}
export function displayErrorMessage(message, color = 'red') {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.color = color;
}
export function updateGreetingsElement() {
    const greetingsElement = document.getElementById('greetings');
    const userFirstName = getUserFirstName();
    if (greetingsElement && userFirstName) {
        greetingsElement.innerText = `Hello, ${userFirstName}!`;
    }
}
function getUserFirstName() {
    return localStorage.getItem('currentUserName');
}
