function FooterBody({ children }) {
  return (
    <footer className="container footer-section">
      <div className="row g-2">{children}</div>
    </footer>
  );
}

export default FooterBody;
