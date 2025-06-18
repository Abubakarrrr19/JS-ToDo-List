var userInp = document.getElementById('inp');
var listItem = document.getElementById('list')
var userInput = userInp.value;
var items = [];
function startFunc(){
    items.push(userInput);
    console.log(userInput)
}