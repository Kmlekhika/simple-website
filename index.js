let isDOBOpen =false;
let dateodbirth;
const settingCogEl =document.getElementById("settingICON");
const settingContentEl =document.getElementById("settingContent");
const initialTnTxtEl =document.getElementById("initialText");
const afterDOBBtnTxtEl =document.getElementById("afterDOBBtnTxt");
const dobButtonEl =document.getElementById("dobButton");
const dobInputEl =document.getElementById("afterDOBBtnTxt");


const yearEl =document.getElementById("year");
const monthEl =document.getElementById("month");
const dayEl =document.getElementById("day");
const hourEl =document.getElementById("hour");
const minuteEl =document.getElementById("minute");
const secondEl =document.getElementById("second");


console.log(localStorage.getItem("year"));

const makeTwoDigitNumber = (number) =>{
    return number > 9 ? number :`0${number}`;

};


const toggleDateofBirthSelectro =() =>{
    if(isDOBOpen){
        settingContentEl.classList.add("hide");

    }else{
        settingContentEl.classList.remove("hide");

    }
    isDOBOpen = !isDOBOpen;

   console =log("Toggle", isDOBOpen);

};
const updateAge =() =>{

    const currentDate = new Date();
 const DateDiff = currentDate -DateofBirth;
 const year =Math.floor(dateDiff/(1000 * 60 * 60 * 24 *365));
 const month =Math.floor((dateDiff/(1000 * 60 * 60 * 24 *365)) % 12);
 const day =Math.floor(dateDiff/(1000 * 60 * 60 * 24 *365)) % 30;
 const hour =Math.floor(dateDiff/(1000 * 60 * 60 )) % 24;
 const minute =Math.floor(dateDiff/(1000 * 60 * )) % 60;
 const second =Math.floor(dateDiff/ 1000) % 60;

 


 yearEl.innerHTML =makeTwoDigitNumber(year);
 monthEl.innerHTML =makeTwoDigitNumber(month);
 dayEl.innerHTML =makeTwoDigitNumber(day);
 hourEl.innerHTML =makeTwoDigitNumber(hour);
 minuteEl.innerHTML =makeTwoDigitNumber(minute);
 secondEl.innerHTML =makeTwoDigitNumber(second);

};


const localStorageGetter = () =>{
    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const date = localStorage.getItem("date");
    if(year && month && date) {
        dateofBirth = new Date(year, month,date);

    }
    updateAge();

}

const contentToggler =() => {
    updateAge();
    if (dateofBiirth){
        initialTextEl.classList.add("hide");
        afterDOBBTextEl.classList.remove("hide");

    }else{
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");

    }
};

const setDOBHandler = () =>{
    const datestring  = dodInputEl.value;

    dateofBirth = datestring ? new Date(datestring) : null;
    if(dateodBirth){
        localStorage.setItem("year" , dateofBirth.getFullyear());
        localStorage.setItem("month" , dateofBirth.getmonth());
        localStorage.setItem("date" , dateofBirth.getDate());

    } 

    contentToggler();
    setInterval(() => updateAge(),1000);

};

localStorageGetter();
contentToggler();

settingCogEl.addEventListener("click", toggleDateofBirthSelectro);
dobButtonEl.addEventListener("click",setDOBHandler);
 
