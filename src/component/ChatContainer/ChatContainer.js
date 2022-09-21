import React, { useState } from "react";
import "./ChatContainer.css";
import Message from "../Message/Message";

function ChatContainer({ userInfo }) {
  // console.log("\n In Chat Container");
  // console.log("\n Out of Chat Container");

  const [messageList, setMessageList] = useState([]);

  const messageObj = {
    user: userInfo.userEmail,
    sentTime: new Date(),
    messageText: "",
  };

  const submitMessage = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    let userInput = e.target[0];
    messageObj.messageText = userInput.value;

    await setMessageList((arr) => [...arr, messageObj]);
    console.log("\n In submit message: ");
  };

  return (
    <div className='container d-flex flex-column justify-content-between chat-container p-3 rounded-4'>
      {messageList.map((item, idx) => (
        <div key={idx}>
          <Message item={item} />
        </div>
      ))}

      <form className='row' onSubmit={submitMessage}>
        <div className='col-10'>
          <div className='form-floating'>
            <textarea
              className='form-control'
              placeholder='Enter your message here'
              id='chat-message-input'
            ></textarea>
            <label htmlFor='chat-message-input'>Input your text</label>
          </div>
        </div>
        <div className='col-2'>
          <button className='btn btn-secondary' type='submit'>
            <i className='bi bi-send-fill'></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatContainer;
