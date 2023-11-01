function NavItem({ text, href, children }) {
  if (children) {
    return children;
  }
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={href}>
        {text}
      </a>
    </li>
  );
}

export default NavItem;
