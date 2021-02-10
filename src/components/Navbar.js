import './styles/Navbar.css';

function darkMode(){
  alert("Dark mode not developed yet")
}

function Navbar() {
  return (
    <div className="navbar">
      <p>Where in the world</p>
      <button className="dark-mode-switch" onClick={darkMode}>
        <i className="far fa-moon"></i>
        <p>Dark mode</p>
      </button>
    </div>
  );
}
export default Navbar;