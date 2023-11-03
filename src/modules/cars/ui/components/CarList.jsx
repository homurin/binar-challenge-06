import CarsCard from "./CarsCard";
import { useContext } from "react";
import { CarContext } from "@/store/cars-filter";

function CarList() {
  const { filteredCars: cars, isLoading } = useContext(CarContext);

  return (
    <section className="cars">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 ">
            <div className="row" id="cars-container">
              {isLoading && <h4>Waiting for cars ...</h4>}
              {cars.length === 0 && !isLoading && <p>Car is empty</p>}
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
