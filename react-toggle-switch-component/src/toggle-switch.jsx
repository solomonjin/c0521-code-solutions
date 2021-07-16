import React, { useState } from 'react';

function ToggleSwitch(props) {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const toggleClass = isToggled ? 'toggle-switch toggled' : 'toggle-switch';
  const circleClass = isToggled ? 'circle circle-on' : 'circle';
  const label = isToggled ? 'ON' : 'OFF';

  return (
    <div className="container">
      <div className={toggleClass} onClick={handleClick}>
        <div className={circleClass}></div>
      </div>
      <span>{label}</span>
    </div>
  );
}

export { ToggleSwitch };
