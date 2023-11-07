import "@/assets/styles/hero.css";
import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";
import HeroSectionBody from "../components/HeroSectionBody";

function HeroSection() {
  return (
    <HeroSectionBody>
      <HeroText
        title="Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)"
        description="Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam."
        btnText="  Sewa Mobil"
        btnHref="/cars"
      />
      <HeroImage
        imgSrc="/assets/images/hero/img_car.png"
        imgAlt="Mercedes Car EQC 300kW Edition - 900x598 1"
      />
    </HeroSectionBody>
  );
}

export default HeroSection;
