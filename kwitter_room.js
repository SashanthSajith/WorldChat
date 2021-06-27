var firebaseConfig = {
    apiKey: "AIzaSyD5_vCMbagQ6XZrFWmWUi3mprfdzW1pVlc",
    authDomain: "kwitter-21276.firebaseapp.com",
    databaseURL: "https://kwitter-21276-default-rtdb.firebaseio.com",
    projectId: "kwitter-21276",
    storageBucket: "kwitter-21276.appspot.com",
    messagingSenderId: "810525046314",
    appId: "1:810525046314:web:0ca290279f84488c1df553",
    measurementId: "G-7G2BH2DR1M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}