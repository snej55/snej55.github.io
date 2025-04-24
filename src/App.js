import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-profile" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/625d0f22874bb07deef34985c8e742e8d2d04ce6_profile512.png" alt="profile"></img>
        <div className="App-profile-label">Hi! I'm <a className="App-github" href="https://github.com/snej55"><b>@snej55</b></a></div>
        <div className="App-info">My stuff: </div>
      </header>

      <div className="App-content">        
        <iframe className="App-project" frameborder="0" src="https://itch.io/embed/3268211?bg_color=1f244b&amp;fg_color=f6e79c&amp;link_color=a8605d&amp;border_color=6d6071" width="552" height="167"><a href="https://snej55.itch.io/defblade">Defblade by snej55</a></iframe>
      </div>
    </div>
  );
}

export default App;
