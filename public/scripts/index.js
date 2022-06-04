let $ = document;
let userOnlineStatusElement = $.querySelector(".user-onlinestate");
let userBatteryLevelDisplay = $.querySelector(".batteryinfo-percentage");

function userOnlineStateDisplay(){
  let userOnlineStatus = navigator.onLine
  
  userOnlineStatus ? userOnlineStatusElement.style.backgroundColor = "#00ff0d" : userOnlineStatusElement.style.backgorundColor = "#ff0000";
}
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