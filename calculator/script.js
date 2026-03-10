let display = document.getElementById("display");
let historyPanel = document.getElementById("historyPanel");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value="";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

let expression = display.value.trim();

if(expression === ""){
    display.value = "";
    return;
}

try{

let result = eval(expression);

if(result === undefined || result === null){
    display.value = "";
    return;
}

display.value = result;

saveToHistory(expression + " = " + result);

}
catch{
display.value = "Error";
}

}

function saveToHistory(operation){

let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

history.unshift(operation);

if(history.length > 20){
history.pop();
}

localStorage.setItem("calcHistory", JSON.stringify(history));

}

function toggleHistory(){

if(historyPanel.style.display === "block"){
historyPanel.style.display = "none";
return;
}

showHistory();
historyPanel.style.display = "block";

}

function showHistory(){

let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

historyPanel.innerHTML = "";

history.forEach(item =>{

let div = document.createElement("div");
div.classList.add("history-item");
div.textContent = item;

historyPanel.appendChild(div);

});

}

function clearHistory(){

localStorage.removeItem("calcHistory");
historyPanel.innerHTML = "";

}