var ul= document.createElement("ul");
function AddTask(){
    var addTask = document.getElementById("addTask").value;
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.textContent = addTask;
    button.textContent = "Delete";
    ul.appendChild(li);
    li.appendChild(button);
    document.body.appendChild(ul);
    document.getElementById("addTask").value = '';

}
function Delete(){
    ul.innerHTML = '';
}