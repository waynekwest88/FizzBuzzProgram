import React from 'react';

const Messages = (props) => {
  return (
    <div id="messages">
      <div id="messages-number">
        Current Number is {props.currentNumber}
      </div>
      <div id="messages-fizz-bizz">
        {props.fizzBuzz}
      </div>
    </div>
  )
}

export default Messages;