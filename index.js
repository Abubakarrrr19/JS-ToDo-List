var cities = [];
var list = document.getElementById('listinp');

function startFunc(){
    var userInp1 = document.getElementById('inp');
    var userInput = userInp1.value;
    if(userInput === ""){
        showMessage("⚠️ Please enter something", "red");
    }
     else if(cities.includes(userInput)){
        showMessage("❌ Duplicate value not allowed", "orange");
    }
    else{
        cities.push(userInput);
        showList()
        showMessage("✅ Item added!", "green");

    }
    userInp1.value = ""    
}

function showList(){
    list.innerHTML = "";
    for(var i = 0; i < cities.length; i++){
        list.innerHTML += `<li> ${cities[i]}  <div class="action-buttons">
    <button class="edit-btn" onclick="edit(${i})">✏️ Edit</button>
    <button class="delete-btn" onclick="del(${i})">🗑️ Delete</button>
  </div> </li>`
    }
}

function edit(i){
    var newInput = prompt("Enter Your New Task");
    cities[i] = newInput;
    showList()
        showMessage("🔄 Item updated!", "blue");

}

function del(i){
    cities.splice(i, 1);
    showList()
    showMessage("🗑️ Item deleted!", "red");

}
function showMessage(text, color) {
    message.innerText = text;
    message.style.color = color;

    setTimeout(() => {
        message.innerText = "";
    }, 3000);
}
