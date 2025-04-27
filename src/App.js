import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-profile" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/625d0f22874bb07deef34985c8e742e8d2d04ce6_profile512.png" alt="profile"></img>
        <div className="App-profile-label">Hi! I'm Jens Kromdijk (<a className="App-github" href="https://github.com/snej55"><b>@snej55</b></a>)</div>
        <div className="App-info">Here's my stuff: </div>
      </header>

      <div className="App-content">
        <div className="App-project">
          <div className="defblade">
            <div className="defblade-info">
              <b>Defblade: </b> A pixel art platformer made from scratch with C++ and SDL2 for the <br></br>High Seas Hack Club event. For more info, check the github repo and <br></br>the itch.io page.
              <a className="speedshifter-link" href="https://github.com/snej55/paper-world" target="_blank" rel="noreferrer">https://github.com/snej55/paper-world</a>
              <em>(originally called paper world)</em>
            </div>
            <iframe className="App-defblade" title="Defblade" frameborder="0" src="https://itch.io/embed/3268211?linkback=true&amp;dark=true" width="552" height="167"><a href="https://snej55.itch.io/defblade">Defblade by snej55</a></iframe>
          </div>
        </div>
        <div className="App-project">
          <div className="speedshifter">
            <div className="speedshifter-info">
              <b>Speedshifter (Beta): </b> A practice app for musicians to change the tempo of audio tracks without affecting the pitch.
              <a className="speedshifter-link" href="https://github.com/snej55/speedshifter" target="_blank" rel="noreferrer">https://github.com/snej55/speedshifter</a>
              <b>Check it out here: </b> <a className="speedshifter-website" href="https://jensk.asleep.pw/speedshifter/speedshifter.html" target="_blank" rel="noreferrer">Speedshifter</a>
            </div>
            <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a84d9c7e5a4eb1331766a7a6e4207f15280a7097_image.png" alt="speedshifter screenshot"></img>
          </div>
        </div>
        <div className="App-project">
          <div class="speedshifter">
            <div className="speedshifter-info">
              <b>Messaging App: </b> A chat site made with React and socket.io, with secure AES encryption, moderation and filtering. More info on the readme: <br></br>
              <a className="speedshifter-link" href="https://github.com/snej55/chat_site" target="_blank" rel="noreferrer">https://github.com/snej55/chat_site</a>
            </div>
            <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/09c4e625624368e4cdbd7eface26dba8b4bffc7a_screenshot_1.png" alt="messaging app screenshot"></img>
          </div>
        </div>
        <div className="App-project">
          <div class="speedshifter">
            <div className="speedshifter-info">
              <b>Explosive Lawn Mower Simulator: </b> An overengineered lawn mower simulator made with pygame-ce and pymunk, with spritestacks and over 400,000 blades of grass.
              It was made in under 12 hours for the Scrapyard Hackathon in Cambridge, 2025.
              <a className="speedshifter-link" href="https://github.com/snej55/explosive-lawn-mower" target="_blank" rel="noreferrer">https://github.com/snej55/explosive-lawn-mower</a>
            </div>
            <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/c457ed0047db9ce7bbe6ae7185aac4ab395a636c_screenshot_2025-03-15_194840.png" alt="explosive lawn mower simulator"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
