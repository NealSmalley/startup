function  user_info() {
  const employmentEl = document.getElementById("employment").addEventListener("click", function(event){
  const employmentElValue = document.getElementById("question").value

  const storedUserInfoString = localStorage.getItem("user_info");
  const user_info = storedUserInfoString ? JSON.parse(storedUserInfoString) : {};
  user_info.employer = employmentElValue; 
  const updatedUserInfoString = JSON.stringify(user_info);
  localStorage.setItem("user_info", updatedUserInfoString);
  window.location.href = "results.html"; 
  });
}

function login() {
    var x = localStorage.getItem("userName");
    document.getElementById("career_machine_question").innerHTML = "Where would you like to work " + x +"?";
    console.log(x);
    const nameEl = document.querySelector("#question").value;
    console.log(nameEl);
  }
function attempt() {
  document.getElementById('employment').addEventListener('click', () => {
    fetch('/api/attempts', { method: 'POST' })
      .then(response => response.json())
      .then(data => console.log('Attempt submitted:', data))
      .catch(error => console.error('Error:', error));
  });
}


attempt()
user_info()
login();




//function login() {
//  const nameEl = document.querySelector("#name");
//  localStorage.setItem("userName", nameEl.value);
//  window.location.href = "career_machine.html";
//}