import React from 'react';

import './results.css';
import '../chatClient';

export function Results() {
  const [messages, setMessages] = React.useState([{msg: "", from: "", cls: ""}]);
  const [flexibility, setFlexibility] = React.useState("50");
  const [pay, setPay] = React.useState("50");
  const [transferability, setTransferability] = React.useState("50");
  const [myName, setMyName] = React.useState("");
  const isDisabled = myName === '';
  
        
  const socket = React.useRef(null);

  React.useEffect(() => {
    // Adjust the webSocket protocol to what is being used for HTTP
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      socket.current = new WebSocket(`${protocol}://${window.location.host}/ws`);
        // Display that we have opened the webSocket
        socket.current.onopen = () => {
          setMessages(prevMessages => [...prevMessages,{msg: "", from: "", cls: "connected"}]);
          //setMessages('system', 'websocket', 'connected');
        };
    
        // Display messages we receive from our friends
        socket.current.onmessage = async (event) => {
          const text = await event.data.text();
          const chat = JSON.parse(text);
          setMessages(prevMessages => [...prevMessages, {msg: chat.msg, from: chat.name, cls: 'friend'}]);
        };
    
        // If the webSocket is closed then disable the interface
        socket.current.onclose = () => {
          setMessages(prevMessages => [...prevMessages, {msg:'disconnected', from: 'websocket', cls: 'disconnected'}]);
          document.querySelector('#name-controls').disabled = true;
          document.querySelector('#chat-controls').disabled = true;
        };

        return () => {
          socket.current.close();
        };
      }, []);

      function sendMessage() {
        const msgEl = document.querySelector('#new-msg');
        const msg = msgEl.value;
        if (msg) {
            setMessages(prevMessages => [...prevMessages, {msg, from: name, cls: 'me'}]);
            const name = document.querySelector('#my-name').value;
            console.log({name, msg})
            socket.current.send(JSON.stringify({name, msg}));
            msgEl.value = '';
        }
      }
        // Send message on enter keystroke
        //const input = document.querySelector('#new-msg');
      function keydown(e) {
          if (e.key === 'Enter') {
              sendMessage();
          }
      };
  
  return (
    <main className="body">
          <hr></hr>
    <div className="content">
    <div className="first_third">
      <h2 id = "employer">Employer: {name}</h2>
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
        <div className="avatar">
          <embed src="../girl4.svg" width="300" height="380" embedborder="0" typle="img/svg+xml"/>
        </div>
    <div className="study_plan">
          <div className="name">
            <fieldset id="name-controls">
              <legend>Your Name</legend>
              <input id="my-name" value={myName} type="text" onChange={event => setMyName(event.target.value)}/>
            </fieldset>
          </div>
      
          <fieldset id="chat-controls" disabled={isDisabled}>
            <legend>Chat about future careers with your friends!</legend>
            <input id="new-msg" onKeyDown={keydown} type="text" />
            <button onClick={sendMessage}>Send</button>
          </fieldset>
          <div id="chat-text">
            {messages.map((message, index) => (<span key={index} className={message.cls}>{message.from}, {message.msg}</span>))}
          </div>    
    </div>
      <div className="other_users">
              <p>Friends Career results:</p>
              <span className="place-holder-user">Unknown Friend</span>
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
      <div className="extra_controls">
        <p>Flexibility</p>
        <div className="slidecontainer">
          <div className="slider_border">
            <div className="slider_background">
            <input type="range" min="1" max="100" value={flexibility} className="slider" id="myRange" onChange={event => setFlexibility(event.target.value)}></input>
            </div>
          </div>
        </div>
        <p>Pay/Hour</p>
        <div className="slidecontainer">
          <div className="slider_border">
            <div className="slider_background">
            <input type="range" min="1" max="100" value={pay} className="slider" id="myRange" onChange={event => setPay(event.target.value)}></input>
            </div>
          </div>
        </div>
        <p>Transferability</p>
        <div className="slidecontainer">
          <div className="slider_border">
            <div className="slider_background">
            <input type="range" min="1" max="100" value={transferability} className="slider" id="myRange" onChange={event => setTransferability(event.target.value)}></input>
            </div>
          </div>
        </div>
        <div>
      </div>
        <form method="get" action="career_machine.html">
          <div className="restart_button"></div>
            <button>Restart</button>
        </form>
      </div>
      </div>
      </main>

      
    );



    // Send a message over the webSocket

    // Create one long list of messages
    //function appendMsg(cls, from, msg) {
    //const chatText = document.querySelector('#chat-text');
    //const chatEl = document.createElement('div');
    //chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
    //chatText.prepend(chatEl);
    //}



    // Disable chat if no name provided
    //const chatControls = document.querySelector('#chat-controls');
    //const myName = document.querySelector('#my-name');
    //function keyup() {
    //chatControls.disabled = myName.value === '';
    //};
  }