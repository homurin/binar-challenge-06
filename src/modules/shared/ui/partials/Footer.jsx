import "@/assets/styles/footer.css";
import FooterBody from "../components/FooterBody";
import FooterAddress from "../components/FooterAddress";
import FooterNavigation from "../components/FooterNavigation";
import FooterSocialList from "../components/FooterSocialList";
import FooterSocialItem from "../components/FooterSocialItem";
import FooterCopyright from "../components/FooterCopyright";

function Footer() {
  return (
    <FooterBody>
      <FooterAddress />
      <FooterNavigation />
      <FooterSocialList>
        <FooterSocialItem
          imgSrc="/src/assets/icons/social-media-icon/icon_facebook.svg"
          href=""
        />
        <FooterSocialItem
          imgSrc="/src/assets/icons/social-media-icon/icon_instagram.svg"
          href=""
        />
        <FooterSocialItem
          imgSrc="/src/assets/icons/social-media-icon/icon_twitter.svg"
          href=""
        />
        <FooterSocialItem
          imgSrc="/src/assets/icons/social-media-icon/icon_mail.svg"
          href=""
        />
        <FooterSocialItem
          imgSrc="/src/assets/icons/social-media-icon/icon_twitch.svg"
          href=""
        />
      </FooterSocialList>
      <FooterCopyright imgSrc="/src/assets/images/logo/logo.png" />
    </FooterBody>
  );
}

export default Footer;
