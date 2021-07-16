import React, { useState } from 'react';

function HotButton(props) {
  const [count, setCount] = useState(0);
  let color = '';
  if (count > 18) color = 'white';
  else if (count > 15) color = 'yellow';
  else if (count > 12) color = 'orange';
  else if (count > 9) color = 'red';
  else if (count > 6) color = 'lilac';
  else if (count > 3) color = 'purple';

  return <button className={color} onClick={() => setCount(count + 1)}>Hot Button</button>;
}

export { HotButton };
