import React, { useEffect, useState } from "react";
import ChatContainer from "../ChatContainer/ChatContainer";
import { useLocation } from "react-router-dom";

function Home({ userName }) {
  let [userCount, setUserCount] = useState(0);
  const location = useLocation();
  const userInfo = location.state;

  return (
    <>
      <div>
        <h1>
          Hello,{" "}
          {userInfo.displayName[0].toUpperCase() +
            userInfo.displayName.split(" ")[0].slice(1)}
        </h1>
      </div>
      <ChatContainer userInfo={userInfo} userCount={userCount} />
    </>
  );
}

export default Home;
