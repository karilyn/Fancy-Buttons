import React, { useState } from 'react'; //optional

function LightSwitchButton(props) {
  const { light, switchLight } = props;

  return (
    <button onClick={switchLight} className="LightSwitchButton">
      {props.light === 'on' && <span><i>💡</i> I'm on!</span>}
      {props.light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;
