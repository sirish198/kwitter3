var firebaseConfig = {
      apiKey: "AIzaSyDVJl2wLClN019V5Ba82lbnkIZwlxwcwBo",
      authDomain: "kwitter-94141.firebaseapp.com",
      databaseURL: "https://kwitter-94141-default-rtdb.firebaseio.com",
      projectId: "kwitter-94141",
      storageBucket: "kwitter-94141.appspot.com",
      messagingSenderId: "227633903978",
      appId: "1:227633903978:web:b6a9352efd020feeb60d13"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    
    function addRoom() { 
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update
      ({ purpose : "adding room name" }); 
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html"; }

function getData() 
{
firebase.database().ref("/").on('value', 
function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});};
      getData();

      function redirectToRoomName(name) {
             console.log(name);
             localStorage.setItem("room_name", name); 
             window.location = "kwitter_page.html"; }
