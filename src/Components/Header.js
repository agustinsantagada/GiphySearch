import "../Styles/styles-Header.css";

export default function Header(props) {
  const darkChange = () => {
    props.setIsDarkMode(!props.isDarkMode);
  };

  return (
    <div className={`App ${props.isDarkMode ? "dark" : "light"}`}>
      <header className="header">
        <div className="header-menu">
          <div className="header-menu-bar">
            {props.isDarkMode ? (
              <img
                className="header-image-logo"
                src="./Images/logo-dark.svg"
                alt="logo-dark"
              />
            ) : (
              <img
                className="header-image-logo"
                src="./Images/logo-light.svg"
                alt="logo-ligth"
              />
            )}
            <button onClick={darkChange} className="btn-theme">
              {props.isDarkMode ? "MODO LIGHT" : "MODO DARK"}
            </button>
          </div>
          <div className="header-menu-icons">
            <h1 className="header-text">
              ¡Inspirate y busca los mejores GIFS!
            </h1>
            <img src="./Images/navbar.svg" className="image-pic" alt="navbar" />
          </div>
        </div>
      </header>
    </div>
  );
}
