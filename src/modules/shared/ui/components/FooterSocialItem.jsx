const FooterSocialItem = ({ imgSrc, imgAlt, href }) => {
  return (
    <li>
      <a href={href}>
        <img src={imgSrc} alt={imgAlt} />
      </a>
    </li>
  );
};

export default FooterSocialItem;
