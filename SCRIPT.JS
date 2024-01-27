const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

function AddTask(){
    if(input.value === ''){
        alert("Enter text first");

    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let cancel  = document.createElement("span");
        cancel.innerHTML = "\u00d7";
        li.appendChild(cancel);
    }
    input.value = "";
    storeData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

showData();