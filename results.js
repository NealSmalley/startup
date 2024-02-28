setInterval(() => {
    const attempt = Math.floor(Math.random() * 15);
    const time = Math.floor(Math.random() * 15);
    const chatText = document.querySelector('#friends_career_results_attempt');
    const chatText1 = document.querySelector('#friends_career_results_name');
    const chatText2 = document.querySelector('#friends_career_results_job');
    const chatText3 = document.querySelector('#friends_career_results_time');
    chatText.innerHTML =
      `<div>${attempt}</div>` + chatText.innerHTML;
    chatText1.innerHTML =
      `<div>Jim</div>` + chatText1.innerHTML;
    chatText2.innerHTML =
      `<div>Taco</div>` + chatText2.innerHTML;
    chatText3.innerHTML =
      `<div>${time}pm</div>` + chatText3.innerHTML;
  }, 5000);

function login() {
    var x = localStorage.getItem("user_info");
    if (x) {
        const userInfo = JSON.parse(x);
        const y = userInfo.employer;
        document.getElementById("employer").innerHTML = y;
        console.log(x);
    } else {
        console.log("not found")
    }
    const employmentElValue = "engineer"

    const storedUserInfoString = localStorage.getItem("user_info");
    const user_info = storedUserInfoString ? JSON.parse(storedUserInfoString) : {};
    user_info.job = employmentElValue; 
    const updatedUserInfoString = JSON.stringify(user_info);
    localStorage.setItem("user_info", updatedUserInfoString);
    
  }
login();