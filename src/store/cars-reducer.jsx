function carsReducer(state, action) {
  switch (action.type) {
    case "ON_RENDER":
      return {
        ...state,
        filteredCars: action.payload.cars,
      };

    case "ON_CHANGE":
      return {
        ...state,
        carsFilter: {
          ...state.carsFilter,
          [action.payload.keyName]: action.payload.value,
        },
      };

    case "ON_SUBMIT_FILTER": {
      action.payload.e.preventDefault();
      const carsFilter = action.payload.carsFilter;

      const filteredCars = action.payload.cars
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
      return {
        ...state,
        filteredCars,
      };
    }
  }

  return state;
}
export default carsReducer;
