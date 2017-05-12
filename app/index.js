'use strict';

class Car {
	constructor (name = 'General', model = 'GM', type) {
		this.name = name;
		this.model = model;
		this.type = type;
		
		if (name === 'Porshe' || name === 'Koenigsegg') {
			this.numOfDoors = 2;
		} else {
			this.numOfDoors = 4;
		}
		
		if (type === 'trailer') {
			this.numOfWheels = 8;
			this.speed = '0 km/h';
			this.isSaloon = false;
		} else {
			this.numOfWheels = 4;
			this.isSaloon = true;
		}
	}

	drive (num) {
		switch (num) {
			case 5:
				this.speed = '250 km/h';
				break;
			case 7:
				this.speed = '77 km/h';
				break;
		}
		return this ;
	}
}

module.exports = Car