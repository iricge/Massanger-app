let $ = document;
let userOnlineStatusElement = $.querySelector(".user-onlinestate");
let userBatteryLevelDisplay = $.querySelector(".batteryinfo-percentage");
let date = new Date();
let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
//! ------------------------------------- Returns date and time at the momment ------------------------------------- !\\
export function dateAtTheMomment(){
  return `Date: ${date.getFullYear()}/${date.getMonth()}/${days[date.getDay()]} || Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
//! ------------------------------------- UUID generator ------------------------------------- !\\
export function _uuid() {
  var d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
//! ------------------------------------- Check for user internet status and shows it on DOM ------------------------------------- !\\
export function userOnlineStateDisplay(){
  let userOnlineStatus = navigator.onLine
  userOnlineStatus ? userOnlineStatusElement.style.backgroundColor = "#00ff0d" : userOnlineStatusElement.style.backgorundColor = "#ff0000";
}
//! ---------------------- Gets users battery percentage and gives to a function that updates the DOM ---------------------- !\\
export function updateBatteryDiplay() {
  navigator.getBattery()
  .then(battery =>{
    let userBatteryPercentage = battery.level * 100
    userBatteryLevelDisplay.innerHTML = `${userBatteryPercentage}%`
    console.log(userBatteryPercentage);
  })
}