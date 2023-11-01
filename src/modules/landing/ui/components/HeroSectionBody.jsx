function HeroSectionBody({ children }) {
  return (
    <section className="hero-section overflow-hidden">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  );
}

export default HeroSectionBody;
