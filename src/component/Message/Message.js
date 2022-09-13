import React from "react";
import "./Message.css";

function Message({ messageList }) {
  console.log("\n In the Message Component: ");
  console.log(messageList);
  let count = 0;

  let side = count % 2 === 0 ? "justify-content-start" : "justify-content-end";

  return (
    <>
      <div className={"row d-flex " + side}>
        <div className='col-4'>
          <div className='message rounded-2'>
            <p>check logs in console</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
