//import { addAFish, getAllFish, deleteAFish, updateFish } from "./src/fish.js"
import { closeCLient } from "./src/connectDb.js";
import { addCar, getAllCar } from "./src/car.js";



await addCar();
await getAllCar();
await closeCLient();