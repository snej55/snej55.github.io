import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <img className="App-profile" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/625d0f22874bb07deef34985c8e742e8d2d04ce6_profile512.png" alt="profile"></img>
          <div className="App-profile-label">Hi! I'm Jens Kromdijk (<a className="App-github" href="https://github.com/snej55"><b>@snej55</b></a>)</div>
          <div className="App-info">Project gallery: </div>
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
              <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f7e46bbbc404e5e7bfc1f260a580f99cd4a28263_85c12c7c-2e36-4da2-8388-270ca70b1bcd-gif_25-01-2025_18-43-03.gif" alt="defblade gif"></img>
            </div>
          </div>
          <div className="App-project">
            <div className="speedshifter">
              <div className="speedshifter-info">
                <b>Speedshifter (Beta): </b> A practice app for musicians to change the tempo of audio tracks without affecting the pitch. Made in C++ using Kirigami and GStreamer.
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
                <b>Explosive Lawn Mower Simulator: </b> An overengineered lawn mower simulator made with pygame-ce and pymunk, with spritestacks and over 400,000 blades of interactive grass.
                It was made in under 12 hours for the Scrapyard Hackathon in Cambridge, 2025.
                <a className="speedshifter-link" href="https://github.com/snej55/explosive-lawn-mower" target="_blank" rel="noreferrer">https://github.com/snej55/explosive-lawn-mower</a>
              </div>
              <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/c457ed0047db9ce7bbe6ae7185aac4ab395a636c_screenshot_2025-03-15_194840.png" alt="explosive lawn mower simulator"></img>
            </div>
          </div>
          <div className="App-project">
            <div class="speedshifter">
              <div className="speedshifter-info">
                <b>Platformerre: </b> A vfx demo using and updating my pygame platformer engine, 'Fishipus'. Uses pygame-ce and moderngl for the graphics.
                <a className="speedshifter-link" href="https://github.com/snej55/Platformerre" target="_blank" rel="noreferrer">https://github.com/snej55/Platformerre</a>
                <a className="speedshifter-link" href="https://github.com/snej55/Fishipus" target="_blank" rel="noreferrer">https://github.com/snej55/Fishipus</a>
              </div>
              <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/ff472a85ef3acb21555ae28bc629ec065c846168_image.png" alt="Platformerre screenshot"></img>
            </div>
          </div>
          <div className="App-project">
            <div class="speedshifter">
              <div className="speedshifter-info">
                <b>KDevelop Wakatime Plugin: </b> A wakatime plugin designed for KDevelop. It uses wakatime-cli to send heartbeats. Made with Qt6 and C++.
                <a className="speedshifter-link" href="https://github.com/snej55/kdevelop-wakatime-plugin" target="_blank" rel="noreferrer">https://github.com/snej55/kdevelop-wakatime-plugin</a>
              </div>
              <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/85f9af74285aa69aacf5618472709f654b893f6f_image.png" alt="KDevelop Wakatime screenshot"></img>
            </div>
          </div>
          <div className="App-project">
            <div class="speedshifter">
              <div className="speedshifter-info">
                <b>P5js platformer: </b> A precision platformer made from scratch in p5js, with custom level loading, a soundtrack, lava vfx, speedrunning and more. Try it here:
                <a className="speedshifter-link" href="https://editor.p5js.org/snej55/sketches/pq3lk0NZH" target="_blank" rel="noreferrer">https://editor.p5js.org/snej55/sketches/pq3lk0NZH</a>
              </div>
              <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/cdab831dd76026037ea5391bd02cd22a42ccdc0c_image.png" alt="p5js platformer Wakatime screenshot"></img>
            </div>
          </div>
          <div className="App-project">
            <div class="speedshifter">
              <div className="speedshifter-info">
                <b>Zrrp (Older project): </b> First project with a more complex entity management system. Uses various 'chunking' systems to ensure efficient rendering. Made with python and pygame-ce.
              </div>
              <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/25a04a67d8ea28526a5ea7526be90d67a7fc2d60_image.png" alt="Zrrp screenshot"></img>
            </div>
          </div>
          <div className="App-project">
            <div class="speedshifter">
              <div className="speedshifter-info">
                <b>World generation (Older project): </b> Terraria-style 2D world generation made with pygame-ce and moderngl. It includes layers, ores, caves and tunnels, as well as a world compression system for saving and loading. Rendering has basic lighting.
                <a className="speedshifter-link" href="https://github.com/snej55/world-generation" target="_blank" rel="noreferrer">https://github.com/snej55/world-generation</a>
              </div>
              <div className="row">
                <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/886b88cd67925484af0a2ae9a83639eeb183a5b2_image.png" alt="world generation screenshot"></img>
                <img className="screenshot" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/e61d0889aab9605bc6b3112793b300d84c912bb9_image.png" alt="world generation screenshot"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
