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
