import { useState, createContext, useEffect } from "react";
import CarsApi from "@/services/api/cars";

export const CarContext = createContext({
  isLoading: false,
  carsFilter: {},
  filteredCars: [],
  onChangeEventHandler: () => {},
  onSubmitHandler: () => {},
});

export default function CarsContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [isLoading, setIsLoading] = useState(false);
  async function getCars() {
    try {
      setIsLoading(true);
      const cars = await CarsApi();
      setCars(cars);
      setFilteredCars(cars);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCars();
  }, []);

  const [carsFilter, setCarsFilter] = useState({
    driverType: "default",
    availableAt: "",
    time: "",
    capacity: getGreaterCapacity(),
  });

  function onChangeEventHandler(keyName, value) {
    setCarsFilter((prevValue) => {
      return {
        ...prevValue,
        [keyName]: value,
      };
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const filteredCars = cars
      .filter((car) => {
        if (carsFilter.driverType === "default") {
          return car;
        }
        return car.available.toString() === carsFilter.driverType;
      })
      .filter((car) => {
        const getDate =
          carsFilter.availableAt === ""
            ? `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
            : carsFilter.availableAt;
        const getTime = carsFilter.time === "false" ? "" : carsFilter.time;
        const date = new Date(`${getDate} ${getTime}`).toISOString();

        return car.capacity >= carsFilter.capacity && car.availableAt <= date;
      });
    console.log(filteredCars);
    setFilteredCars(filteredCars);
  }

  function getGreaterCapacity() {
    const capacity = cars.map((e) => e.capacity);
    const greaterCapacity = Math.max(...capacity);
    return greaterCapacity;
  }

  const ctxValue = {
    isLoading,
    carsFilter,
    filteredCars,
    onChangeEventHandler,
    onSubmitHandler,
  };
  return <CarContext.Provider value={ctxValue}>{children}</CarContext.Provider>;
}
