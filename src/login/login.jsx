import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();
useEffect(() => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#name').textContent = userName;
    setDisplay('login_or_create', 'none');
    setDisplay('logout', 'block');
  } else {
    setDisplay('login_or_create', 'block');
    setDisplay('logout', 'none');
  }
});
function gotoLogin(){
  navigate('/career_machine')
}

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#name')?.value;
  console.log(userName)
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
    gotoLogin();
    //window.location.href = 'career_machine.html';
  } else {
    const body = await response.json();
    //const modalEl = document.querySelector('#msgModal');
    //modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    //const msgModal = new bootstrap.Modal(modalEl, {});
    //msgModal.show();
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
  return (
    <main>
          <hr />
    <div className="center" id="login_or_create">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name here" />
        <input type="text" id="password" placeholder="Password" />
        <button type="submit" id="login" onClick={loginUser}>Login</button>
        <button type="submit" id="create" onClick={createUser}>Create</button>
    </div>
    <div className="center2" id="logout">
      <button type="submit" id="logout" onClick={logout}>Logout</button>
  </div>
    </main>
    
  );
}