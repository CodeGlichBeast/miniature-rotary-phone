const firebaseConfig = {
       apiKey: "AIzaSyA0fVCTdZPuHG0b48QDcfZiiuF6jK6cnpQ",
       authDomain: "kwitter-bac8f.firebaseapp.com",
       databaseURL: "https://kwitter-bac8f-default-rtdb.firebaseio.com",
       projectId: "kwitter-bac8f",
       storageBucket: "kwitter-bac8f.appspot.com",
       messagingSenderId: "784594156517",
       appId: "1:784594156517:web:25538aaafe4341f1d18d0c"
     };
     

firebase.initializeApp(firebaseConfig);

un=localStorage.getItem("User");

document.getElementById("user_name").innerHTML="Welcome " + un + "!";

function addRoom(){
       room_name=document.getElementById("room").value;

firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);

window.location="chatroom.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='room_name' id= '+ Room_names +' onclick='redirecttoroomname(this.id)'>#"+ Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML += row
      });});}
getData();

function redirecttoroomname(name){
       localStorage.setItem("room", name);
       console.log(name);
       window.location="chatroom.html";
}
function logout(){
       localStorage.removeItem("User");
       localStorage.removeItem("room_name");
       window.location="index.html";
}
