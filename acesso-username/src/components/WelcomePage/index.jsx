const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <h1>Seja bem vindo {user}</h1>
      <button onClick={() => HandleLogout()}>SAIR</button>
    </>
  );
};

export default WelcomePage;
