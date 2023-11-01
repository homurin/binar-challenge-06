import "@/assets/styles/cta-section.css";

function Cta() {
  return (
    <section className="cta-section container w-100 text-center px-3">
      <div className="cta-text-container">
        <div className="cta-bold-text">
          <strong>Sewa Mobil di (Lokasimu) Sekarang</strong>
        </div>
        <div className="cta-regular-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <button
          className="btn btn-success"
          style={{
            borderRadius: 0,
            backgroundColor: `#5CB85F`,
            borderColor: `#5CB85F`,
          }}
        >
          Mulai Sewa Mobil
        </button>
      </div>
    </section>
  );
}

export default Cta;
