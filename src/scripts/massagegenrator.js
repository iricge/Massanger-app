"use strict"

import { dateAtTheMomment , _uuid  } from "./massageinfo.js"

//! ------------------- Html Components ------------------- !\\

let $ = document;
let contactContainer = $.querySelector(".contact-container");
let contactInfoDom;
let DBOpenReq = null;
let db = null;
let userprofileDb = null;
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

// function contactDOMCreator(){
//   let contactObjInfo = JSON.parse(localStorage.getItem("contact_obj"))
//   contactObjInfo.forEach(element => {
//     contactContainer.insertAdjacentHTML("beforeend", ` 
//     <li class="contact-infocontainer" data-contact_id= ${element.contact_id})"><img src="assets/images/thumbnails/image.jpg"alt="contact profile picture"class="contact-profilepicture"/><h3 class="contact-username">${element.contact_username}</h3></li>`)
//   });
//   contactInfoDom = $?.querySelectorAll(".contact-infocontainer")
//   contactIdGetter(contactInfoDom)
//   return contactInfoDom
// }
function contactIdGetter(element) {
}

function massageGenerator(){}

//! ------------------- Events ------------------- !\\
window.addEventListener("keypress", (e)=>{
  if (e.key === "enter"){
    newMassageGenerator()
  }
})

window.addEventListener("load", ()=>{
  contactDOMCreator()
  // DBOpenReq = indexedDB.open("userTest", 6)

  // DBOpenReq.addEventListener("error", (err)=>{
  // alert(`indexedDB failed : ${err} please Refresh`)
  // })

  DBOpenReq.addEventListener("success", (e)=>{
  })

  DBOpenReq.addEventListener("upgradeneeded", (e)=>{
   db = e.target.result;
  //  userprofileDb = db.createObjectStore("user-profile-picture", {
  //   keypath: "1"
  //  }) 
   dbObjectStore(e)
 })
})
// function dbObjectStore(e) {
//   let newObject = {
//     "id": "hello",
//     "profileurl": "hala"
//   }
//   db = e.target.result
//   console.log(db);
//   let tx = db.transaction("user-profile-picture", "readwrite")

//   tx.addEventListener("error", (err)=>{
//     console.log(`tx error ${err}`);
//   })
//   tx.addEventListener("success", (e)=>{
//     console.log(`tx success ${e}`);
//   })
//   let store = tx.objectStore("user-profile-picture")
//   let request = store.add(newObject)
// }
