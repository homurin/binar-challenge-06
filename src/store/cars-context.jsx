import { useState, createContext, useEffect, useReducer } from "react";
import CarsApi from "@/services/api/cars";
import carsReducer from "./cars-reducer";

export const CarContext = createContext({
  isLoading: false,
  isError: false,
  filteredCars: [],
  onChangeEventHandler: () => {},
  onSubmitHandler: () => {},
});

export default function CarsContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [carsState, carsDispatch] = useReducer(carsReducer, {
    filteredCars: cars,
    carsFilter: {
      driverType: "default",
      availableAt: "",
      time: "",
      capacity: getGreaterCapacity(),
    },
  });

  async function getCars() {
    try {
      setIsError(false);
      setIsLoading(true);
      const cars = await CarsApi();
      setCars(cars);
      carsDispatch({ type: "ON_RENDER", payload: { cars } });
    } catch (err) {
      setIsError(true);
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCars();
  }, []);

  function onChangeEventHandler(keyName, value) {
    carsDispatch({ type: "ON_CHANGE", payload: { keyName, value } });
  }

  function onSubmitHandler(e) {
    carsDispatch({
      type: "ON_SUBMIT_FILTER",
      payload: { e, cars, carsFilter: carsState.carsFilter },
    });
  }

  function getGreaterCapacity() {
    const capacity = cars.map((e) => e.capacity);
    const greaterCapacity = Math.max(...capacity);
    return greaterCapacity;
  }
  const ctxValue = {
    isError,
    isLoading,
    filteredCars: carsState.filteredCars,
    onChangeEventHandler,
    onSubmitHandler,
  };

  return <CarContext.Provider value={ctxValue}>{children}</CarContext.Provider>;
}
