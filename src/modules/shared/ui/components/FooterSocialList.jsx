const FooterSocialList = ({ children }) => {
  return (
    <div className="col-lg-3 col-md-12 footer-social-media mt-md-3 mt-lg-0 ms-lg-4 ms-md-2">
      <div className="flex-column">
        <h5 className="social-media-text-regular">Connect with us</h5>
        <ul className="social-media-list nav column-gap-lg-2 column-gap-md-3 column-gap-sm-4">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default FooterSocialList;
