import "@/assets/styles/nav.css";
import NavbarBody from "../components/NavbarBody";
import NavList from "../components/NavList";
import NavItem from "../components/NavItem";
import NavRegisterButton from "../components/NavRegisterButton";

function Navbar() {
  return (
    <NavbarBody imgSrc="src/assets/images/logo/logo.png" imgAlt="logo">
      <NavList>
        <NavItem text="Our Services" href="#" />
        <NavItem text="Why Us" href="#" />
        <NavItem text="Testimonial" href="#" />
        <NavItem text="FAQ" href="#" />
        <NavRegisterButton href="#" />
      </NavList>
    </NavbarBody>
  );
}

export default Navbar;
