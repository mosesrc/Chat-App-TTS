import LoginForm from "./component/LoginForm";
import Header from "./component/Header";

import "./App.css";

function App() {
  return (
    <div className='container'>
      <Header />
      <LoginForm />
    </div>
  );
}

export default App;

// 📝: Firebase Stuff
// <div id='message'>
//           <h2>Welcome</h2>
//           <h1>Firebase Hosting Setup Complete</h1>
//           <p>
//             You're seeing this because you've successfully setup Firebase
//             Hosting. Now it's time to go build something extraordinary!
//           </p>
//           <a target='_blank' href='https://firebase.google.com/docs/hosting/'>
//             Open Hosting Documentation
//           </a>
//         </div>
//         <p id='load'>Firebase SDK Loading&hellip;</p>
