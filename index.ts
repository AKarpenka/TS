interface IAnimals {
	animal: 'cat' | 'dog' | 'bird',
    breed: string,
    sterilized?: string
}

// Response #1
interface IAvailableAnimal extends IAnimals{
	location: string,
	age?: number,
	available: boolean
}

// Response #2
interface INotAvailableAnimal {
	message: string,
	nextUpdateIn: Date,
	notAvailable: boolean
}

function isAvailable(response: IAvailableAnimal | INotAvailableAnimal): response is IAvailableAnimal {
	return "available" in response
}

function isNotAvailable(response: IAvailableAnimal | INotAvailableAnimal): response is INotAvailableAnimal {
	return 'notAvailable' in response
}


function checkAnimalData(animal: IAvailableAnimal | INotAvailableAnimal = {
	message: 'not available',
	nextUpdateIn: new Date(2012, 0, 1),
	notAvailable: true
}): IAvailableAnimal | string {
	if(isAvailable(animal)) {
		return animal;
	} else if (isNotAvailable(animal)) {
		return `${animal.message}, you can try in ${animal.nextUpdateIn}`;
	} else {
		return animal;
	}
}


let animalAvalRes: IAvailableAnimal = {
	animal:  'cat',
	breed: 'string',
	sterilized: 'yes',
	location: 'Liverpole',
	age: 5,
	available: true
}

let animalNotAvalRes: INotAvailableAnimal = {
	message: 'not available',
	nextUpdateIn: new Date(2012, 0, 1),
	notAvailable: true
}

console.log(checkAnimalData(animalAvalRes));

