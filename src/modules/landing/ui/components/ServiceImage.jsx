function ServiceImage({ src, alt }) {
  return (
    <div className="col-lg-7 col-md-12">
      <figure className="image-service-container mx-lg-auto mx-sm-0">
        <img className="service-image" src={src} alt={alt} />
      </figure>
    </div>
  );
}

export default ServiceImage;
