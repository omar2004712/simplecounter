let counter = 0
let entriesNumber = 0;
let warning = "you cannot get a negative number";
let space = " ";
let prevEnteriesContainer = document.getElementById("prev-entries-container");
let number = document.getElementById("number");

function increment(){
    counter++;
    number.innerText=counter;
}


function save(){
    if(entriesNumber == 0){
    prevEnteriesContainer.textContent+=(counter);
    }
    else{
        prevEnteriesContainer.textContent+=(' - ' + counter);

    }
    counter = 0;
    number.innerText=counter;
    entriesNumber++;
}

function subtract(){
    if(counter > 0){
        counter--;
        number.innerText=counter;
    }
    else{
        window.alert(warning)
        }
    
}

function Clear(){
    prevEnteriesContainer.textContent="Previuos Entries: ";
    counter = 0;
    number.innerText = counter;
    entriesNumber=0;
}