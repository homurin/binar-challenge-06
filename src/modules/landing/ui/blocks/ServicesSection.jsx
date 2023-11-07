import "@/assets/styles/service.css";
import ServicesSectionBody from "../components/ServiceSectionBody";
import ServiceImage from "../components/ServiceImage";
import ServiceListHeader from "../components/ServiceListHeader";
import ServiceBody from "../components/ServiceBody";
import ServiceList from "../components/ServiceList";
import ServiceItem from "../components/ServiceItem";

function ServicesSection() {
  return (
    <ServicesSectionBody>
      <ServiceImage
        src="assets/images/services/img_service.png"
        alt="Happy girl"
      />
      <ServiceBody>
        <ServiceListHeader
          title="Best Car Rental for any kind of trip in (Lokasimu)!"
          text=" Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll."
        />
        <ServiceList>
          <ServiceItem text="Sewa Mobil Dengan Supir di Bali 12 Jam" />
          <ServiceItem text="Sewa Mobil Lepas Kunci di Bali 24 Jam" />
          <ServiceItem text="Sewa Mobil Jangka Panjang Bulanan" />
          <ServiceItem text="Gratis Antar - Jemput Mobil di Bandara" />
          <ServiceItem text="Layanan Airport Transfer / Drop In Out" />
        </ServiceList>
      </ServiceBody>
    </ServicesSectionBody>
  );
}

export default ServicesSection;
