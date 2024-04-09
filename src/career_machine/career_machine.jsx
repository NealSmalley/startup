import React from 'react';

import './career_machine.css';

export function Career_machine() {
  return (
    <main>
    <hr></hr>
      <main>
        <div class = "center">
          <h5 id = "career_machine_question">Where would you like to work?</h5>
            <input type="text" id="question" placeholder="Company here" />
            <button type="submit" id="employment">Enter</button>
        </div>
      <div class="avatar">
        <embed src="girl4.svg" width="300" height="380" embedborder="0" typle="img/svg+xml"/>
      </div>
      </main>
    </main>
  );
}