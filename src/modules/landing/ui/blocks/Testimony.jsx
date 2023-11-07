import "@/assets/styles/testimony.css";
import TestimonyCarousel from "../components/TestimonyCarousel";
import TestimonyCarouselItem from "../components/TestimonyCarouselItem";
import TestimonyBody from "../components/TestimonyBody";

function Testimony() {
  return (
    <TestimonyBody
      title="Testimonial"
      subTitle="Berbagai review positif dari para pelanggan kami"
    >
      <TestimonyCarousel>
        <TestimonyCarouselItem
          clientName="John Doe"
          clientAge="22"
          clientAddress="Gensokyo"
          clientQuotes=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod”"
          imgSrc="/assets/images/testimony/client.png"
          active={true}
        />
        <TestimonyCarouselItem
          clientName="John Doe"
          clientAge="22"
          clientAddress="Gensokyo"
          clientQuotes=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod”"
          imgSrc="/assets/images/testimony/client.png"
        />
        <TestimonyCarouselItem
          clientName="John Doe"
          clientAge="22"
          clientAddress="Gensokyo"
          clientQuotes=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod”"
          imgSrc="/assets/images/testimony/client.png"
        />
      </TestimonyCarousel>
    </TestimonyBody>
  );
}

export default Testimony;
