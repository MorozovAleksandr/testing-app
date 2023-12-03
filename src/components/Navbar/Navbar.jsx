import { Link } from "react-router-dom";

const Navbar = () => (
  <div className={"links"}>
    <Link className={"link"} to="/" data-testid="main-link">
      main
    </Link>
    <Link className={"link"} to="about" data-testid="about-link">
      about
    </Link>
    <Link className={"link"} to="users" data-testid="users-link">
      users
    </Link>
    <Link className={"link"} to="hello" data-testid="hello-link">
      hello
    </Link>
  </div>
);

export default Navbar;
