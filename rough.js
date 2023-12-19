const dogs = ["German shepherd", "chow chow", "Golden"];
const fish = ["Dolphin", "whale"];
dogs.push(fish);
console.log(dogs);
const animals = dogs.concat(fish);
console.log(animals);

const newAnimals = [...dogs, ...fish];
console.log(newAnimals);