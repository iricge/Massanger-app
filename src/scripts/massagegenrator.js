"use strict"

import { dateAtTheMomment , userOnlineStateDisplay , _uuid , updateBatteryDiplay } from "./massageinfo.js"

//! ------------------- Html Components ------------------- !\\

let $ = document;
const massageInput = $.querySelector(".chat-massage-input");
const massageSubmitBtn = $.querySelector(".chat-massage-submit");
const massageContainer = $.querySelector(".chat-massage-container");
const massageForm = $.querySelector(".chat-massage-form");
//! ------------------- Javascript data ------------------- !\\

let contactArray = [];
let contactThatIsChating_name;
let contactThatIsChating_id;

let obj = {
  "userMassage_content": content,
  "userMassage_date": dateAtTheMomment(),
  "hasContact_Seen": false,
}

function contactGenerator(contactName, contactId, content){
  contactThatIsChating_name = contactName 
  contactThatIsChating_id = contactId 

  let contactInfo = {
    "contact_username": contactThatIsChating_name,
    "contact_id": contactThatIsChating_id,
    "contact_massages": [
      {
        "massage_content": content,
        "massage_date": dateAtTheMomment(),
        "hasUser_Seen": false
      },
     ],
    "user_massages": [
      {
        "userMassage_content": content,
        "userMassage_date": dateAtTheMomment(),
        "hasContact_Seen": false,
      }
    ]
  }
  contactArray.push(contactInfo)
}


contactGenerator("iric", _uuid(), "Hello iric1")
contactGenerator("alex", _uuid(), "Hello iric2")
contactGenerator("sepi", _uuid(), "Hello iric3")
contactGenerator("hosi", _uuid(), "Hello iric4")
contactArray[0].contact_massages[0].push(obj)

console.log(contactArray[1].contact_massages[0].massage_content);
console.log(contactArray[1].contact_massages[0]);


function massageGenerator(){}
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
  })

  DBOpenReq.addEventListener("success", (e)=>{
  })

  DBOpenReq.addEventListener("upgradeneeded", (e)=>{
  })
})