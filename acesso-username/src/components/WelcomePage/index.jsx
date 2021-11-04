const WelcomePage = ({ user, SetIsLoggedIn }) => {
  function HandleLogout() {
    SetIsLoggedIn(false);
  }

  return (
    <>
      <h1>Seja bem vindo {user}</h1>
      <button onclick={HandleLogout}>SAIR</button>
    </>
  );
};

export default WelcomePage;
