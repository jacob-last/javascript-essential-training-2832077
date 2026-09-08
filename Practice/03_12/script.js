/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import LaptopBag from "./LaptopBag.js";

const laptopBag = new LaptopBag("laptoppy", 20, "blue", 2, 25, 26, true, false);

console.log(laptopBag.laptopInBag);
laptopBag.toggleLaptopInBag();
console.log(laptopBag.laptopInBag);
laptopBag.toggleLaptopInBag();
laptopBag.toggleLaptopInBag();
console.log(laptopBag.laptopInBag);
