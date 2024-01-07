import React, { useState } from 'react';

function Welcome() {
  const [Name, setName] = useState('');
  const [Msg, setMsg] = useState(null);

  function check() {
    if (Name.trim() !== '') {
      setMsg(
        <div>
          <h3>
            {Name}, welcome and enjoy your coffee
          </h3>
        </div>
      );
    } else {
      setMsg(
        <div>
          <h3>
            Type your Name
          </h3>
        </div>
      );
    }
  }

  return (
    <div>
      <label><b>Name : </b></label>
      <input type='text' id='text'className='inputname' onChange={(change) => setName(change.target.value)} />
      <input id='InputCoffee' type='submit' value='Send'onClick={check} />
      <h3>{Name} is correct ?</h3>
      <div>
        {Msg}
      </div>
    </div>
  );
}

export default Welcome;
