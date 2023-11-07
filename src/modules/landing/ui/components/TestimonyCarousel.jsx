function TestimonyCarousel({ children }) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {children}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">
            <img
              src="assets/icons/carousel/fi_chevron-left.svg"
              alt="left arrow"
            />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span aria-hidden="true">
            <img
              src="assets/icons/carousel/fi_chevron-right.svg"
              alt="right arrow"
            />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default TestimonyCarousel;
