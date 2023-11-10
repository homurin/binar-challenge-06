import { useContext } from "react";
import CarsCard from "./CarsCard";
import { CarContext } from "@/store/cars-context";

function CarList() {
  const { filteredCars: cars, isLoading, isError } = useContext(CarContext);

  return (
    <section className="cars">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 ">
            <div className="row" id="cars-container">
              {isError && (
                <h4 className="text-danger text-center">
                  Failed to fetch data
                </h4>
              )}
              {isLoading && (
                <h4 className="text-center">Menunggu data mobil ...</h4>
              )}
              {!isError && cars.length === 0 && !isLoading && (
                <p className="text-center">Maaf tidak ada mobil tersedia</p>
              )}
              {cars.map((car) => {
                return <CarsCard key={car.id} {...car} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarList;
