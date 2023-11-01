function HeroImage({ imgSrc, imgAlt }) {
  return (
    <div className="col-lg-6 col-md-12 mt-lg-0 mt-md-5">
      <img className="hero-image" src={imgSrc} alt={imgAlt} />
    </div>
  );
}

export default HeroImage;
