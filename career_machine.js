  const employmentEl = document.getElementById("employment").addEventListener("click", function(event){
  const employmentElValue = document.getElementById("question").value
  const database = [];
  database.push(employmentElValue)
  let database_string = JSON.stringify(database);


  const storedUserInfoString = localStorage.getItem("user_info");
  const user_info = storedUserInfoString ? JSON.parse(storedUserInfoString) : {};
//  user_info['employer'] = JSON.stringify(employmentElValue);
  user_info.employer = JSON.stringify(employmentElValue); // Add or update the email property
  const updatedUserInfoString = JSON.stringify(user_info);
  localStorage.setItem("user_info", updatedUserInfoString);


  localStorage.setItem("database", database_string);
  localStorage.setItem("userName", employmentElValue); 
  console.log(employmentElValue);
  window.location.href = "results.html"; 
  });
  

//function login() {
    //const nameEl = document.querySelector("#name");
    //localStorage.setItem("userName", nameEl.value);
    //window.location.href = "career_machine.html";
  //}

//function login() {
//    var x = localStorage.getItem("userName");
//    document.getElementById("career_machine_question").innerHTML = "Where would you like to work " + x +"?";
//    console.log(x);
    //const nameEl = document.querySelector("#question").value;
    //console.log(nameEl);
//  }

//login();
