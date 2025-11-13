const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// on loading the window:
window.addEventListener("load", updateExchangeRate);


//  function updateExchangeRate:
const  updateExchangeRate = async () =>{

    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    
    if(amountValue==="" || amountValue<1){
        amountValue = 1;
        amount.value = "1";
    }

    console.log(fromCurr.value, toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    // API call:
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amountValue* rate;
    console.log("value", finalAmount);

    // display the message: 1USD = 83 INR:
    msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}


// for dropdowns and changing flag:
for(let select of dropdowns){

    // accesing country codes:
    for(currCode in countryList){
        
        // creating options:
        const newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // logic of automatic select currency in begining:
        if(select.name=="from" && currCode=="USD"){
            newOption.selected = select;
        }
        else if(select.name=="to" && currCode=="INR"){
            newOption.selected = select;
        }

        // append newOption to select:
        select.append(newOption);
    }

    // updating flag on changing:
    select.addEventListener("change", (evt)=>{

        changeFlag(evt.target);
    }, false);

}

// Function for changing flag:
const changeFlag = (element) => {
    // console.log(element);

    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
} 


// calling api on clicking the button:
btn.addEventListener("click", (evt) => {

    evt.preventDefault();
    updateExchangeRate();

}, false);



