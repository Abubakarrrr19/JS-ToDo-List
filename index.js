var listItem = document.getElementById('list')
var items = [];
function startFunc(){
    var userInp = document.getElementById('inp');
    var userInput = userInp.value;
    items.push(userInput);
    listItem.innerHTML = ""
    listAdd()
    userInput = ""
}

function listAdd(){
    listItem.innerHTML = ""
    for(i=0; i < items.length; i++){
        listItem.innerHTML += `<li> ${items[i]} </li>`
    }
}
