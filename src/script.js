function get(){
  let task = localStorage.getItem("task");
  let listCard = document.getElementsByClassName("listcard")[0];
  
  listCard.innerHTML = JSON.parse(task);
}

function add(){
  let input = document.getElementsByTagName("input")[0];
  let listCard = document.getElementsByClassName("listcard")[0];
  let addItem = ("<spam class='listitems'><spam class='done' onclick='taskDone(this)'>To do</spam>" + input.value + "</spam>");
  
  listCard.innerHTML = listCard.innerHTML + addItem;

  localStorage.setItem("task", JSON.stringify(listCard.innerHTML));
  
  return input.value = "";
}

function clearStorage(){
  let listCard = document.getElementsByClassName("listcard")[0];
  
  localStorage.clear();
  
  return listCard.innerHTML = "";
}

function taskDone(e){
  if(e.innerHTML == "To do"){
    e.innerHTML = "Done"
    e.style.backgroundColor = "#C44536";
  }
  else{
    e.innerHTML = "To do";
    e.style.backgroundColor = "#197278";
  }
}