import React from "react";
import "./Message.css";

function Message({ item }) {
  console.log("\n In the Message Component: ");
  console.log(item);
  let count = 0;
  const calcOvrPos = count % 2 === 0;

  let messageSide = calcOvrPos
    ? "justify-content-start"
    : "justify-content-end";
  const userTitlePos = calcOvrPos
    ? "position-absolute top-0 start-0 translate-middle"
    : "position-absolute top-0 start-100 translate-middle";
  const timeBlockPos = calcOvrPos
    ? "position-absolute top-100 start-100 translate-middle"
    : "position-absolute top-100 start-0 translate-middle";

  const sideMargin = calcOvrPos ? "message-left" : "message-right";

  const formatAMPM = () => {
    let hours = item.sentTime.getHours();
    let minutes = item.sentTime.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  return (
    <>
      <div className={"row d-flex " + messageSide}>
        <div className='col-4'>
          <div
            className={"message p-4 rounded-2 position-relative " + sideMargin}
          >
            <p className={"user-title " + userTitlePos}>{item.user}</p>
            <p className='message-text'>{item.messageText}</p>
            <p className={"time-block " + timeBlockPos}>{formatAMPM()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
