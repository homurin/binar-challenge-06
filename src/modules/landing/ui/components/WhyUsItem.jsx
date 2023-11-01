function WhyUsItem({ title, imgSrc, alt, description }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card h-100">
        <div className="card-body">
          <img className="why-us-icon" src={imgSrc} alt={alt} />
          <h5 className="text-card-why-us-bold mt-5 mb-4">
            <strong>{title}</strong>
          </h5>
          <p className="text-card-why-us-regular">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUsItem;
