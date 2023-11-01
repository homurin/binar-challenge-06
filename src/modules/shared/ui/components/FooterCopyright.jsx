const FooterCopyright = ({ imgSrc, imgAlt }) => {
  return (
    <div className="col-lg-3 col-md-12 mt-lg-0 mt-md-4 ms-lg-auto ms-md-0 copyright-text-regular">
      <p>Copyright Binar 2022</p>
      <img className="brand-logo" src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default FooterCopyright;
