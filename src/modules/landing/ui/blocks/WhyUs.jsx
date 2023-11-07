import "@/assets/styles/why-us.css";
import WhyUsList from "../components/WhyUsList";
import WhyUsItem from "../components/WhyUsItem";
import WhyUsBody from "../components/WhyUsBody";

function WhyUs() {
  return (
    <WhyUsBody>
      <WhyUsList title="Mengapa harus pilih Binar Car Rental?">
        <WhyUsItem
          title="Mobil Lengkap"
          description="
          Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
          terawat"
          imgSrc="/assets/icons/why-us/icon_complete.svg"
          alt="Complete Icon"
        />
        <WhyUsItem
          title="Harga Murah"
          description="
          Harga murah dan bersaing, bisa bandingkan harga kami dengan
          rental mobil lain"
          imgSrc="/assets/icons/why-us/icon_price.svg"
          alt="Price Icon"
        />
        <WhyUsItem
          title="Layanan 24 Jam"
          description="
          Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
          tersedia di akhir minggu"
          imgSrc="/assets/icons/why-us/icon_24hrs.svg"
          alt="Complete Icon"
        />
        <WhyUsItem
          title="Sopir Profesional"
          description="
          Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
          tepat waktu"
          imgSrc="/assets/icons/why-us/icon_professional.svg"
          alt="Professional Icon"
        />
      </WhyUsList>
    </WhyUsBody>
  );
}

export default WhyUs;
