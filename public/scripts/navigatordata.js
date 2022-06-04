let $ = document;
let userOnlineStatusElement = $.querySelector(".user-onlinestate");
let userBatteryLevelDisplay = $.querySelector(".batteryinfo-percentage");
// Check for user internet status and shows it on DOM
function userOnlineStateDisplay(){
  let userOnlineStatus = navigator.onLine
  userOnlineStatus ? userOnlineStatusElement.style.backgroundColor = "#00ff0d" : userOnlineStatusElement.style.backgorundColor = "#ff0000";
}
// Gets users battery percentage and gives to a function that updates the DOM
navigator.getBattery()
  .then(battery =>{
    updateBatteryDiplay(battery)
  })
function updateBatteryDiplay(percentage) {
    let userBatteryPercentage = percentage.level * 100;
    userBatteryLevelDisplay.innerHTML = `${userBatteryPercentage}%`
}

window.addEventListener("load", ()=>{
  userOnlineStateDisplay()
})