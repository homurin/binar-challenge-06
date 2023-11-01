function TestimonyBody({ title, subTitle, children }) {
  return (
    <section className="testimony-section container">
      <div className="testemony-bold-text mb-3">
        <strong>{title}</strong>
      </div>
      <div className="testimony-regular-text mb-3">
        <p>{subTitle}</p>
      </div>
      {children}
    </section>
  );
}

export default TestimonyBody;
