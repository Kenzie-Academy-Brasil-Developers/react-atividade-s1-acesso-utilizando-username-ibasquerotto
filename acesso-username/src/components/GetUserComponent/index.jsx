import { useState } from "react";

const GetUserComponent = ({ setUser, SetIsLoggedIn }) => {
  const [userInput, SetUserInput] = useState(" ");

  function HandleLogin() {
    setUser(userInput);
    SetIsLoggedIn(true);
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => SetUserInput(event.target.value)}
        />
        <button onClick={HandleLogin}>Acessar com o nome</button>
      </form>
    </>
  );
};

export default GetUserComponent;
