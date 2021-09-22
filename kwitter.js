function addUser(){
user=document.getElementById("username").value;
localStorage.setItem("User", user);

window.location="kwitter_room.html";
}