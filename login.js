  const nameEl = document.getElementById("login").addEventListener("click", function(event){
  const nameElValue = document.getElementById("name").value
  localStorage.setItem("userName", nameElValue); // Corrected: Directly use the value
  console.log(nameElValue);
  window.location.href = "career_machine.html"; // Ensure this redirection is intentional
  });
  

//function login() {
    //const nameEl = document.querySelector("#name");
    //localStorage.setItem("userName", nameEl.value);
    //window.location.href = "career_machine.html";
  //}