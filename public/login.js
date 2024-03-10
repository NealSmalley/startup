function database() {
  const nameEl = document.getElementById("login").addEventListener("click", function(event){
  const nameElValue = document.getElementById("name").value
  const user_info = {};
  user_info.username = nameElValue
  localStorage.setItem("user_info", JSON.stringify(user_info));
  const nameEl1 = document.querySelector("#name");
  localStorage.setItem("userName", nameEl1.value);
  window.location.href = "career_machine.html"; 
  });
}

database();