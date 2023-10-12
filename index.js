//import { addAFish, getAllFish, deleteAFish, updateFish } from "./src/fish.js"
import { closeCLient } from "./src/connectDb.js";
import { addCar, deleteCar, getAllCar,updateCar } from "./src/car.js";



await updateCar();
await getAllCar();
await closeCLient();