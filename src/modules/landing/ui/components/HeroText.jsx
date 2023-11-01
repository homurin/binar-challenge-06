function HeroText({ title, description, btnText, btnHref }) {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="text-hero-bold mb-4 ">
        <strong>{title}</strong>
      </div>
      <div className="text-hero-reguler mb-3">
        <p>{description}</p>
      </div>
      <a
        href={btnHref}
        className="btn btn-success"
        type="button"
        style={{
          borderRadius: 0,
          backgroundColor: `#5CB85F`,
          borderColor: `#5CB85F`,
        }}
      >
        {btnText}
      </a>
    </div>
  );
}

export default HeroText;
