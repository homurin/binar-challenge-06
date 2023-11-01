import { useState, createContext, useEffect } from "react";
import CarsApi from "@/services/api/cars";

export const CarContext = createContext({
  isLoading: false,
  carsData: [],
  carsFilter: {},
  onChangeEventHandler: () => {},
  onSubmitHandler: () => {},
});

export default function CarsContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function getCars() {
    try {
      setIsLoading(true);
      const cars = await CarsApi();
      setCars(cars);
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
    driverType: "",
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
  }

  function getGreaterCapacity() {
    const capacity = cars.map((e) => e.capacity);
    const greaterCapacity = Math.max(...capacity);
    return greaterCapacity;
  }

  const ctxValue = {
    isLoading,
    carsData: cars,
    carsFilter,
    onChangeEventHandler,
    onSubmitHandler,
  };
  return <CarContext.Provider value={ctxValue}>{children}</CarContext.Provider>;
}
