import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/cars.css";
import HeroSection from "@/modules/landing/ui/blocks/HeroSection";
import FindCars from "../blocks/FindCars";
import CarList from "../components/CarList";
import CarsContextProvider from "@/store/cars-context";

function Main() {
  return (
    <main>
      <HeroSection />
      <CarsContextProvider>
        <FindCars />
        <CarList />
      </CarsContextProvider>
    </main>
  );
}

export default Main;
