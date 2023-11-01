async function getCars() {
  try {
    const fetchCars = await fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.json"
    );
    const cars = await fetchCars.json();
    return cars;
  } catch (err) {
    throw new Error(err);
  }
}
export default getCars;
