import { isUserNameExists, users } from "./users.model.js";

export type Activity = {
    id: string,
    activityType: string,
    startTime: Date,
    finishTime: Date;
}

export type Activities = Activity[];

// export const activities: Activities = JSON.parse(localStorage.getItem('myActivities') || '[]');
export const activities = [] as Activities;

const validActivityTypes: string[] = [];

// function addActivity(newActivity: Activity): void {
//     activities.push(newActivity);
//   }

  function associateActivityWithUser(userName: string, Id: string): void {
    const user = users.find(user => user.userName === userName);
    const myActivityName = userName + "Activity";
    
    const myActivitiesArray = JSON.parse(localStorage.getItem(myActivityName) || '[]');

    if (user) {
      user.activityIds.push(Id);
      myActivitiesArray.push(Id);
      localStorage.setItem( myActivityName, JSON.stringify(myActivitiesArray));
    //   alert("succeed");
    }
  }

export function addActivityTypeToValidsArray(activityType: string ): void {
    const trimmedAndLowerCase = normalizeString(activityType);

    if (!validActivityTypes.includes(trimmedAndLowerCase)) {
        validActivityTypes.push(trimmedAndLowerCase);
    }
}

function normalizeString(inputString: string) {
    const trimmedString = inputString.trim();
    const normalizedSpacesString = trimmedString.replace(/\s+/g, ' ');
  
    const lowercaseString = normalizedSpacesString.toLowerCase();
  
    return lowercaseString;
  }

function generateRandomId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

export function addNewActivityFromForm(event: Event): void {
    event.preventDefault();

    const activityTypeInput = document.getElementById('activityType') as HTMLInputElement;
    const startTimeInput = document.getElementById('startTime') as HTMLInputElement;
    const finishTimeInput = document.getElementById('finishTime') as HTMLInputElement;

    const id = generateRandomId();
    const activityType = activityTypeInput.value;
    const startTime = new Date(startTimeInput.value);
    const finishTime = new Date(finishTimeInput.value);
 
    const userName = localStorage.getItem('currentUserName');

    if (startTime >= finishTime) {
      alert('Finish time must be after start time');
      return;
    }

    const newActivity: Activity = {
      id,
      activityType,
      startTime,
      finishTime
    };

    activities.push(newActivity);
    addActivityTypeToValidsArray(activityType);
    // localStorage.setItem('myActivities', JSON.stringify(activities));
    
    if (userName) {
        associateActivityWithUser(userName, id);
    }

    // // Optionally, you can clear the form inputs
    // activityTypeInput.value = '';
    // startTimeInput.value = '';
    // finishTimeInput.value = '';

    console.log(activities);
    console.log(validActivityTypes);
  }
