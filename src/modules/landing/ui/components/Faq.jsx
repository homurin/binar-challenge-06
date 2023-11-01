function Faq() {
  return (
    <section className="faq-section container">
      <div className="row">
        <div className="faq-ex col-lg-5 text-sm-center">
          <div className="faq-text-bold mb-3">
            <strong>Frequently Asked Question</strong>
          </div>
          <div className="faq-text-regular">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="faq-list col-lg-7 ">
          <div
            className="accordion accordion-flush d-flex flex-column"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed accordion-gap"
                  style="border: 1px solid #D4D4D4;  margin-bottom: 20px; border-radius: 4px; border: 1px solid #d4d4d4;"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> className. This is the first
                  item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed accordion-gap"
                  type="button"
                  style="border: 1px solid #D4D4D4;  margin-bottom: 20px; border-radius: 4px; border: 1px solid #d4d4d4;"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> className. This is the second
                  item's accordion body. Let's imagine this being filled with
                  some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  style="border: 1px solid #D4D4D4;  margin-bottom: 20px; border-radius: 4px; border: 1px solid #d4d4d4;"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> className. This is the third
                  item's accordion body. Nothing more exciting happening here in
                  terms of content, but just filling up the space to make it
                  look, at least at first glance, a bit more representative of
                  how this would look in a real-world application.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  style="border: 1px solid #D4D4D4;  margin-bottom: 20px; border-radius: 4px; border: 1px solid #d4d4d4;"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> className. This is the third
                  item's accordion body. Nothing more exciting happening here in
                  terms of content, but just filling up the space to make it
                  look, at least at first glance, a bit more representative of
                  how this would look in a real-world application.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  style="border: 1px solid #D4D4D4;  margin-bottom: 20px; border-radius: 4px; border: 1px solid #d4d4d4;"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse accordion-gap"
                style="border-color: 1px solid #D4D4D4;"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> className. This is the third
                  item's accordion body. Nothing more exciting happening here in
                  terms of content, but just filling up the space to make it
                  look, at least at first glance, a bit more representative of
                  how this would look in a real-world application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
