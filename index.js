const advice = document.querySelector("#advice");
const title = document.querySelector("#title");
const titleHeader = document.createElement("h2");

// Using fetch API with async/await for getting data from url.
async function newAdvice(){ 

    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    
    showAdvice(data);
}

// Changing innerHTML with the data which we took from url.
function showAdvice(data){

    advice.innerHTML = data.slip.advice;
    titleHeader.innerHTML = `ADVICE ♦ ${data.slip.id}`;
    title.appendChild(titleHeader);
}

// For showing an advice when refresh the site.
newAdvice();

// Adding addEventListener to the button for running newAdvice() function.
const adviceButton = document.querySelector("#btn");  
adviceButton.addEventListener("click",newAdvice);