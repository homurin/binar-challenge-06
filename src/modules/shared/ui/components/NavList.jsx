function NavList({ children }) {
  return (
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        {children}
      </ul>
    </div>
  );
}

export default NavList;
