"use strict"

import { dateAtTheMomment , userOnlineStateDisplay , _uuid , updateBatteryDiplay } from "./massageinfo.js"

//! ------------------- Html Components ------------------- !\\

let $ = document;
const massageInput = $.querySelector(".chat-massage-input");
const massageSubmitBtn = $.querySelector(".chat-massage-submit");
const massageContainer = $.querySelector(".chat-massage-container");
const massageForm = $.querySelector(".chat-massage-form");
let contactContainer = $.querySelector(".contact-container");
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
    "contact_profilepicture": "Nothing",
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
  let amountofContactStr = JSON.parse(localStorage.getItem("contact_obj"))
  amountofContactStr.forEach(element => {
    contactContainer.insertAdjacentHTML("beforeend", ` 
    <li class="contact-infocontainer" data-contact_id= ${element.contact_id}><img src="assets/images/thumbnails/image.jpg"alt="contact profile picture"class="contact-profilepicture"/><h3 class="contact-username">${element.contact_username}</h3></li>`)
  });
  console.log("the elements are done");
  let contactInfoDom = $?.querySelectorAll(".contact-infocontainer")
  console.log(contactInfoDom);
  return contactInfoDom
}
function contactIdGetter(id) {
   
}
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