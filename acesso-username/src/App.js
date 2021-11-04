import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {isLoggedIn ? (
            <WelcomePage user={user} SetIsLoggedIn={SetIsLoggedIn} />
          ) : (
            <GetUserComponent setUser={setUser} SetIsLoggedIn={SetIsLoggedIn} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
