import React, { useEffect, useState } from "react";
import ChatContainer from "../ChatContainer/ChatContainer";

function Home({ userName }) {
  //   const [user, loading, error] = useAuthState(auth);
  let [userCount, setUserCount] = useState(0);

  return (
    <>
      <ChatContainer userName={userName} userCount={userCount} />
    </>
  );
}

export default Home;
