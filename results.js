setInterval(() => {
    const score = Math.floor(Math.random() * 15);
    const chatText = document.querySelector('#friends_career_results');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Jim</span> Taco Bell employee ${score}</div>` + chatText.innerHTML;
  }, 5000);