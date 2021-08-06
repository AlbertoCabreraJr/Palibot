import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt=""
        />
        <button
          class="btn btn-md  my-2 my-sm-0 btn-dark pl-4 pr-4"
          type="submit"
          style={{ borderRadius: "12px" }}
        >
          Search
        </button>
        <form class="form-inline">
          <input
            class="form-control ml-sm-2"
            type="search"
            placeholder="What do you want?"
            aria-label="Search"
            style={{ border: "3px solid #3D4148", borderRadius: "10px" }}
          />
        </form>
      </nav>
    </>
  );
};

export default Navbar;
