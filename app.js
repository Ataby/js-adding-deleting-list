//SELECTORS
const inputBox = document.querySelector("#input");
const addBtn = document.querySelector(".btn-success");
const delBtn = document.querySelector(".btn-danger");
const langList = document.getElementById("lang-list");

const newUl = document.createElement("ul"); // 'UL'LİSTESİ OLUŞTURUP
langList.appendChild(newUl); // LANGLIST'IN ICINE YERLEŞTIR.

//ADDBTN EVENT
addBtn.addEventListener("click" , ()=>{ //ADD_EVENT KULLANIRKEN 'ON'CLICK KULLANILMAZ.
      if (!inputBox.value){
            alert('please enter a language');
      }else {
            newUl.innerHTML += `<li>${inputBox.value}</li>`;
            inputBox.value='';
      }
   inputBox.focus();   
});

//DELETE BUTTON EVENT
delBtn.addEventListener('click', ()=>{
      newUl.childElementCount >0
      ? newUl.removeChild(newUl.lastElementChild)
      : alert('No item to delete');
      //EN SONDAKI ELEMENTI SILER. POP() GİBİ;
})

//ENTER KEY EVENT
inputBox.addEventListener('keydown', (event)=> {
if(event.keyCode ==13){
      addBtn.click();
}

// console.log(event);
// console.log(event.target);
// console.log(event.keyCode);
// console.log(event.code);
});

//DELETE KEY EVENT
inputBox.addEventListener('keydown', (event)=> { //KEYDOWN = TUŞA BASILINCA
if (event.code=='Delete'){ //KEYUP = TUŞU BIRAKTIGIN ZAMAN
//if(event.keyCode ==46){
      delBtn.click();
}
});


window.addEventListener('load',()=>{
inputBox.focus();
});