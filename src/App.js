import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import LightSwitchButton from './components/LightSwitchButton';
import React, { useState } from 'react'; //optional

function App() {
  {/* moved the light state over to App from LightSwitchButton */}
  const [light, setLight] = useState("off");
  const dark = (light === "off" ? "dark" : "");
  const switchLight = () => setLight(light === "on" ? "off" : "on");


  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        {/* passing the props down to LightSwitchButton*/}
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>


    </div>
  );
}

export default App;
