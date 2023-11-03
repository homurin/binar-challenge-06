function CarsCard({
  image,
  manufacture,
  type,
  rentPerDay,
  description,
  capacity,
  transmission,
  year,
}) {
  return (
    <div className="col-lg-4 my-2">
      <div className="card px-2 py-4">
        <img
          src={`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/images/${
            image.split("/")[2]
          }`}
          alt={manufacture}
          className="card-img-top mt-4 text-center"
        />
        <div className="card-body">
          <h5 className="card-title fs-6">
            {manufacture}/{type}
          </h5>
          <h5 className="card-title fs-5 fw-bold">
            Rp {rentPerDay.toLocaleString()},00 / hari
          </h5>
          <p className="cars__p">{description}</p>
          <div className="row">
            <div className="col-1">
              <img src="images/fi_users1.png" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{capacity} orang</div>
          </div>
          <div className="row mt-2">
            <div className="col-1">
              <img src="images/fi_settings.png" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{transmission}</div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-1">
              <img src="images/fi_calendar.png" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">Tahun {year}</div>
          </div>

          <a href="#" className="btn btn-utama" style={{ width: `100%` }}>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarsCard;
