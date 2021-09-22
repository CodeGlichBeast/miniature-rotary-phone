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

room_name=localStorage.getItem("room_name");
User=localStorage.getItem("User")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data[' name '];
    message = message_data[' message '];
    like = message_data[' like '];
    name_with_tag=" <h4>"+ name +"<img class='user_tick' src='tick.png'> </h4>";
    message_tag="<h4 class='message_h4'>"+ message +"</h4>";
    like_button="<button class='btn btn-warning' id="+ firebase_message_id +" value="+ like +" onclick='updatelikes(this.id)'>";
    tick="<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +" </span> </button> <hr>";

    row=name_with_tag + message_tag + like_button + tick;
    document.getElementById("output").innerHTML+=row;

 } });  }); }
getData();

function updatelikes(message_id){
console.log("like clicked -" + message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
})
};
function broadcast(){
msg=document.getElementById("text").value;

firebase.database().ref(room_name).push({
    name:User,
    Message:msg,
    like:0

});
document.getElementById("text").innerHTML=" ";
}
function logout(){
    localStorage.removeItem("User");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
