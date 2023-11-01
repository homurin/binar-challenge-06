function NavRegisterButton({ href }) {
  return (
    <a
      href={href}
      className="btn btn-success"
      type="button"
      style={{
        borderRadius: 0,
        backgroundColor: `#5CB85F`,
        borderColor: `#5CB85F`,
      }}
    >
      Register
    </a>
  );
}

export default NavRegisterButton;
