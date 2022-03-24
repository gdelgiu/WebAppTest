import Dropdown from "./navbar_conts/Dropdown";
import SearchBar from "./navbar_conts/SearchBar";
import CustomName from "./navbar_conts/CustomName";
import NavTogglerButton from "./navbar_conts/NavTogglerButton";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <CustomName />
        <NavTogglerButton />
        <SearchBar />
        <Dropdown />
      </div>
    </nav>
  );
}

export default Navbar;
