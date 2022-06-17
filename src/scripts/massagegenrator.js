"use strict"

import { dateAtTheMomment , userOnlineStateDisplay , _uuid , updateBatteryDiplay } from "./massageinfo.js"

//! ------------------- Html Components ------------------- !\\

let $ = document;
let contactContainer = $.querySelector(".contact-container");
let contactInfoDom;
//! ------------------- Javascript data ------------------- !\\

let contactArray = [];
let contactThatIsChating_name;

// "contact_massages": [
//   {
//     "massage_content": content,
//     "massage_date": dateAtTheMomment(),
//     "hasUser_Seen": false
//   },
//  ],
// "user_massages": [
//   {
//     "userMassage_content": content,
//     "userMassage_date": dateAtTheMomment(),
//     "hasContact_Seen": false,
//   }
// ]

function contactGenerator(contactName){
  contactThatIsChating_name = contactName 

  let contactInfo = {
    "contact_username": contactThatIsChating_name,
    "contact_id": _uuid(),
    "contact_profilepicture": "",
    "contact_lastMassage": "",
    "contact_massages": [],
    "user_massages": []
  }
  contactArray.push(contactInfo)
  contactLocalStorageSave(contactArray)
}
contactGenerator("iric")

function contactLocalStorageSave(data){
  localStorage.setItem("contact_obj", JSON.stringify(data))
}

function contactDOMCreator(){
  let contactObjInfo = JSON.parse(localStorage.getItem("contact_obj"))
  contactObjInfo.forEach(element => {
    contactContainer.insertAdjacentHTML("beforeend", ` 
    <li class="contact-infocontainer" data-contact_id= ${element.contact_id})"><img src="assets/images/thumbnails/image.jpg"alt="contact profile picture"class="contact-profilepicture"/><h3 class="contact-username">${element.contact_username}</h3></li>`)
  });
  contactInfoDom = $?.querySelectorAll(".contact-infocontainer")
  contactIdGetter(contactInfoDom)
}
function contactIdGetter(element) {
  console.log(element[0].dataset.contact_id);
}

function massageGenerator(){}

//! ------------------- Events ------------------- !\\
window.addEventListener("keypress", (e)=>{
  if (e.key === "enter"){
    newMassageGenerator()
  }
})

window.addEventListener("load", ()=>{
  userOnlineStateDisplay()
  updateBatteryDiplay()
  contactDOMCreator()
})

// let DBOpenReq = indexedDB.open("userTest", 1)

// DBOpenReq.addEventListener("error", (err)=>{
//   alert(`indexedDB failed : ${err} please Refresh`)
// })

// DBOpenReq.addEventListener("success", (e)=>{
// })

// DBOpenReq.addEventListener("upgradeneeded", (e)=>{
//   let db = e.target.result;
// })