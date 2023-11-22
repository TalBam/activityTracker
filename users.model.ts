export type Gender = "male" | "female" ;

export type User = {
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    email: string,
    userName: string,
    password: string,
    activityIds: string[];
}

export type Users = User[];

export const users: Users = JSON.parse(localStorage.getItem('users') || '[]');

export function addUser(newUser: User): void {
    users.push(newUser);
    updateLocalStorage();
}

export function isUserNameExists(username: string): boolean {
    return users.some(user => user.userName === username);
}

export function isEmailExists(email: string): boolean {
    return users.some(user => user.email === email);
}

// export function isUserCredentialsValid(userName: string, password: string): boolean {
//     return users.some(user => user.userName === userName && user.password === password);
//   }

export function updateLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

export function displayErrorMessage(message: string, color: string = 'red'): void {
  
    const errorMessage = document.getElementById('errorMessage');

    errorMessage!.textContent = message;
    errorMessage!.style.color = color;
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


