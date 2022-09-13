import React, { useState } from "react";
import "./ChatContainer.css";
import Message from "../Message/Message";

function ChatContainer({ userName }) {
  // const [userName, setUserName] = useState(email);
  // const [messageText, setMessageText] = useState();
  // const [sentTime, setSentTime] = useState(Date.now());

  const [messageList, setMessageList] = useState([]);

  const messageObj = {
    userName,
    sentTime: Date.now(),
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
      <Message messageList={messageList} />
      <Message messageList={messageList} />

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
