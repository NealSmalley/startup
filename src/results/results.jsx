import React from 'react';

import './results.css';

export function Results() {
  return (
    <main>
          <hr></hr>
    <div class="content">
    <div class="first_third">
      <h2 id = "employer">Employer:</h2>
      <p>Placeholder for Employer name(BYU)</p>
      <p> In demand skills for this Company:</p>
          <li>Coding</li>
          <li>Programming</li>
          <li>Css</li>
      <h4 id = "attempts"> Select one of the Common Jobs at Employer location. Attempt:</h4>
          <li id = "job">BYU Electrical Engineering Department</li>
              <li>$salary</li>
          <li>BYU Computer Engineering Department</li>
              <li>$salary</li>
          <li>BYU Cyber Security Department</li>
              <li>$salary</li>
    </div>
        <div class="avatar">
          <embed src="girl4.svg" width="300" height="380" embedborder="0" typle="img/svg+xml"/>
        </div>
    <div class="study_plan">
          <p>Study plan</p>
          <li>Freshman</li>
          <li>Sophomore</li>
          <li>Junior</li>
          <li>Senior</li>
          <hr></hr>
          <div class="name">
            <fieldset id="name-controls">
              <legend>Your Name</legend>
              <input id="my-name" type="text" />
            </fieldset>
          </div>
      
          <fieldset id="chat-controls" disabled>
            <legend>Chat about future careers with your friends!</legend>
            <input id="new-msg" type="text" />
            <button onclick="sendMessage()">Send</button>
          </fieldset>
          <div id="chat-text"></div>    
    </div>
      <div class="other_users">
              <p>Friends Career results:</p>
              <span class="place-holder-user">Unknown Friend</span>
            <table>
              <thead>
                  <tr>
                      <th>Result Number</th>
                      <th>Name</th>
                      <th>Career Result</th>
                      <th>Time</th>
                  </tr>
              </thead>
              <tbody>
                  <tr id="friends_career_results">
                      <td id="friends_career_results_attempt"></td>
                      <td id="friends_career_results_name"></td>
                      <td id="friends_career_results_job"></td>
                      <td id="friends_career_results_time"></td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>Jim</td>
                      <td>Taco Bell employee</td>
                      <td>2pm</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>Joe</td>
                      <td>Supreme leader</td>
                      <td>3pm</td>
                  </tr>
              </tbody>
          </table>
            <hr></hr>
      </div>
      <div class="extra_controls">
        <p>Flexibility</p>
        <div class="slidecontainer">
          <div class="slider_border">
            <div class="slider_background">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
            </div>
          </div>
        </div>
        <p>Pay/Hour</p>
        <div class="slidecontainer">
          <div class="slider_border">
            <div class="slider_background">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
            </div>
          </div>
        </div>
        <p>Transferability</p>
        <div class="slidecontainer">
          <div class="slider_border">
            <div class="slider_background">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
            </div>
          </div>
        </div>
        <div>
      </div>
        <form form method="get" action="career_machine.html">
          <div class="restart_button"></div>
            <button>Restart</button>
        </form>
      </div>
      </div>
      </main>
    );
}