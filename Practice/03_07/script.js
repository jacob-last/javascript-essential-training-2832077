/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cup = {
    height: 18,
    radius: 8,
    material: "glass",
    contains: "",
    fillWith: function (liquid) {
        this.contains = liquid
    }
}

const water = {
    colour: "transparent",
    taste: "nothing",
    hydrationPointsAwardedToDrinker: 32
}

console.log(cup)
cup.fillWith(water)
console.log(cup)
console.log(cup.toString())
