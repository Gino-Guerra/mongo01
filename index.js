import { addAFish, getAllFish } from "./src/fish.js"
import { closeCLient } from "./src/connectDb.js";


await addAFish();
await getAllFish()
await closeCLient();