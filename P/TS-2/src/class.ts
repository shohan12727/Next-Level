class Animal {
    name: string;
    species : string;
    sound: string;


    constructor(name:string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound
    }
}

const dog = new Animal('Dogesh', 'Dog', 'Ghew Ghew');

console.log(dog)
console.log(dog.name)