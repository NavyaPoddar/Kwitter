//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", authDomain: "testkwitter.firebaseapp.com", databaseURL: "https://testkwitter.firebaseio.com", projectId: "testkwitter", storageBucket: "testkwitter.appspot.com", messagingSenderId: "624653701634", appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("playername");
var room_name = localStorage.getItem("roomnamekey");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function send(){

      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            likes: 0
      });

      document.getElementById("msg").innerHTML= "";
}

function logout(){

      localStorage.removeItem("playername");
      localStorage.removeItem("roomnamekey");
      window.location="page1.html";
      
      }