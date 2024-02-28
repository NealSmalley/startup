  const nameEl = document.getElementById("login").addEventListener("click", function(event){
  const nameElValue = document.getElementById("name").value
  const database = [];
  const user_info = {};
  user_info.username = nameElValue
  database.push(nameElValue)
  let database_string = JSON.stringify(database);
  localStorage.setItem("database", database_string);
  localStorage.setItem("user_info", JSON.stringify(user_info));
  localStorage.setItem("userName", nameElValue); 
  console.log(nameElValue);
  window.location.href = "career_machine.html"; 
  });
  

//function login() {
    //const nameEl = document.querySelector("#name");
    //localStorage.setItem("userName", nameEl.value);
    //window.location.href = "career_machine.html";
  //}