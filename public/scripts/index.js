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
//! ------------------- IndexedDB for photos and other stuff ------------------- !\\
  let DBOpenReq = indexedDB.open("userTest", 1)

  DBOpenReq.addEventListener("error", (err)=>{
    alert(`indexedDB failed : ${err} please Refresh`)
    console.log(err);
  })

  DBOpenReq.addEventListener("success", (e)=>{
    console.log(e);
  })

  DBOpenReq.addEventListener("upgradeneeded", (e)=>{
    console.log(e);
    console.log(e.oldVersion);
    console.log(e.newVersion);
  })
})