import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import '../chatClient.js';

import './career_machine.css';

export function Career_machine() {
    const navigate = useNavigate();
    const [career_machine_question, set_career_machine_question] = React.useState("Where would you like to work?")

    function user_info() {
    useEffect(() => {
        const employmentEl = document.getElementById("employment").addEventListener("click", function(event){
        const employmentElValue = document.getElementById("question").value
      
        const storedUserInfoString = localStorage.getItem("user_info");
        const user_info = storedUserInfoString ? JSON.parse(storedUserInfoString) : {};
        user_info.employer = employmentElValue; 
        const updatedUserInfoString = JSON.stringify(user_info);
        localStorage.setItem("user_info", updatedUserInfoString);
        gotoLogin();
        //window.location.href = "results"; 
        });
      attempt();
      login();
    });
    }
    function gotoLogin(){
        navigate('/results')
      }
      
      function login() {
          var x = localStorage.getItem("userName");
          //document.getElementById("career_machine_question").innerHTML = "Where would you like to work " + x +"?";
          set_career_machine_question("Where would you like to work " + x +"?");
          console.log(x);
          const nameEl = document.querySelector("#question").value;
          console.log(nameEl);
          //gotoLogin();
        }
      function attempt() {
        document.getElementById('employment').addEventListener('click', () => {
          fetch('/api/attempts', { method: 'POST' })
            .then(response => response.json())
            .then(data => console.log('Attempt submitted:', data))
            .catch(error => console.error('Error:', error));
        });
      }
    
      
      
      user_info()
      
  return (
    <main>
    <hr></hr>
      <main>
        <div className = "center">
          <h5 id = "career_machine_question">{career_machine_question}</h5>
            <input type="text" id="question" placeholder="Company here" />
            <button type="submit" id="employment">Enter</button>
        </div>
      <div className="avatar">
        {/*<embed src="girl4.svg" width="300" height="380" embedborder="0" typle="img/svg+xml"/>*/}
      </div>
      </main>
    </main>
  );
}