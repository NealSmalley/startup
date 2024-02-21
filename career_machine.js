function login() {
    var x = localStorage.getItem("userName");
    document.getElementById("career_machine_question").innerHTML = "Where would you like to work " + x +"?";
    console.log(x);
    //const nameEl = document.querySelector("#question").value;
    //console.log(nameEl);
  }

login();
