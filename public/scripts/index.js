"use strict"

import { dateAtTheMomment , userOnlineStateDisplay , _uuid , updateBatteryDiplay } from "./massageinfo.js"

let $ = document;
const massageInput = $.querySelector(".chat-massage-input");
const massageSubmitBtn = $.querySelector(".chat-massage-submit");
const massageContainer = $.querySelector(".chat-massage-container");
const massageForm = $.querySelector(".chat-massage-form");

function massageObj(){}



massageForm.addEventListener("click", (e)=>{
  e.preventDefault();
})
window.addEventListener("keypress", (e)=>{
  if (e.key === "enter"){
    newMassageGenerator()
  }
})
window.addEventListener("load", ()=>{
  userOnlineStateDisplay()
  updateBatteryDiplay()
})