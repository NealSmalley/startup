  const nameEl = document.getElementById("login").addEventListener("click", function(event){
  const nameElValue = document.getElementById("name").value
  const user_info = {};
  user_info.username = nameElValue
  localStorage.setItem("user_info", JSON.stringify(user_info));
  window.location.href = "career_machine.html"; 
  });
  

//function login() {
    //const nameEl = document.querySelector("#name");
    //localStorage.setItem("userName", nameEl.value);
    //window.location.href = "career_machine.html";
  //}