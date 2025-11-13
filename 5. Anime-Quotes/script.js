const URL ="https://animechan.xyz/api/random";

const getBtn = document.getElementById("btn-1");
const header = document.getElementById("header");
const main = document.getElementById("main");



getBtn.addEventListener("click", async function(){

    // calling api:
    let response = await fetch(URL);
    let data = await response.json();

    // changing style:
    header.style.height = "30vh";
    main.style.height = "70vh";
    getBtn.classList.add("hide");

    // display the data:
    showQuote(data);

    // clearing tha main:

}, false);


function showQuote(data){

    // creating data:

    const para = document.createElement("div");
    para.classList.add("para");

    const pName = document.createElement("p");
    const pCharacter = document.createElement("p");
    const pQuote = document.createElement("p");

    pName.innerHTML = `<h3>Anime name </h3> ${data.anime}` ;
    pCharacter.innerHTML = `<h3>Character </h3> ${data.character}` ;
    pQuote.innerHTML = `<h3>Quote </h3> ${data.quote}` ;

    para.appendChild(pName);
    para.appendChild(pCharacter);
    para.appendChild(pQuote);

    // create button:
    const anotherBtn = document.createElement("button");
    anotherBtn.innerText = "Get Another Quote";
    anotherBtn.id = "btn-2";

    main.appendChild(para);
    main.appendChild(anotherBtn);

    anotherBtn.addEventListener("click", async function(){

        // clear main:
        main.innerHTML ="";


        // calling api:
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);

        // show data:
        showQuote(data);

    }, false);
    
}






