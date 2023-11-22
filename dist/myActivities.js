import { updateGreetingsElement, users } from "./users.model.js";
import { addNewActivityFromForm, } from "./activities.model.js";
window.onload = updateGreetingsElement;
const addActivityForm = document.getElementById('addActivityForm');
addActivityForm?.addEventListener('submit', addNewActivityFromForm);
// localStorage.clear();
// alert (typeof(localStorage.getItem('currentUserName')));
console.log(users);
// const currentUserNameActivitiesArray = (localStorage.getItem("currentUserName"))
// const currentUserNameActivities = JSON.parse(localStorage.getItem('myActivities') || '[]');
