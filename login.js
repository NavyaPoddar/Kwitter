function adduser(){
    var username=document.getElementById("user_name").value;
    localStorage.setItem("playername",username);
    window.location="page2.html";
}