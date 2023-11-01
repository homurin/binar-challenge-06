function TestimonyCarouselItem({
  imgSrc,
  clientName,
  clientAge,
  clientAddress,
  clientQuotes,
  active,
}) {
  return (
    <div className={`carousel-item ${active && "active"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-center">
            <img
              className="client-carousel-photo"
              src={imgSrc}
              alt={clientName}
            />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 text-lg-start">
            <div className="rate-container d-flex justify-content-lg-start justify-content-sm-center">
              <img src="/src/assets/icons/testimony/Rate.svg" alt="" />
            </div>
            <p className="carousel-text-regular">{clientQuotes}</p>
            <strong className="carousel-text-bold">
              {clientName} {clientAge}, {clientAddress}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonyCarouselItem;
