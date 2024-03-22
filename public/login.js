/*
function database() {
  //const nameEl = document.getElementById("login").addEventListener("click", function(event){
  const nameElValue = document.getElementById("name").value
  const user_info = {};
  user_info.username = nameElValue
  localStorage.setItem("user_info", JSON.stringify(user_info));
  const nameEl1 = document.querySelector("#name");
  localStorage.setItem("userName", nameEl1.value);
  window.location.href = "career_machine.html"; 
  //});
}
*/

(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#name').textContent = userName;
    setDisplay('login_or_create', 'none');
    setDisplay('logout', 'block');
  } else {
    setDisplay('login_or_create', 'block');
    setDisplay('logout', 'none');
  }
})();

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#name')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('userName', userName);
    window.location.href = 'career_machine.html';
  } else {
    const body = await response.json();
  }
}
/*
function play() {
  window.location.href = 'career_machine.html';
}
*/
function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}













//database();