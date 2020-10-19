const { getColor } = require('./apiMock');

class Color {
	constructor(name) {
		this.name = name
	}
}

class Green extends Color {
	constructor() {
		super('green');
	}
}

class Blue extends Color {
	constructor() {
		super('blue');
	}
}

class Red extends Color {
	constructor() {
		super('Red');
	}
}

async function getColors(order, callback) {
	const colors = [];
	for (const colorName of order) {
		let color = await getColor(colorName);
		colors.push(color);
	}
	callback(colors);
	return colors;
}

function colors() {
	const launchArgs = process.argv;
	const colorOrder = [];

	for (let i = 2; i < launchArgs.length; i++) {
		colorOrder.push(launchArgs[i]);
	}
	printResult(colorOrder);

}

function printResult(colorOrder) {
	getColors(colorOrder, async function (colors) {
		colors = await Promise.all(colors);
		for (const color of colors) {
			console.log(color.name + " = hex: " + color.HEX + " rgb: " + color.RGB.R + ',' + color.RGB.G + ',' + color.RGB.B)
		}
	});
}


colors()
