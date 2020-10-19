const { getColor } = require('./apiMock');
const { getAnswers } = require('./askQuestions');
//const { createObjects } = require('./colors');

const getColors = async (order, callback) => {
	const colors = [];
	for (const colorName of order) {
		let color = await getColor(colorName);
		colors.push(color);
	}
	//if we wanted class objects for any reason
	//createObjects(colors);
	callback(colors);
	return colors;
}

const colors = () => {
	const launchArgs = process.argv;
	const colorOrder = [];
	let outputType = 'hex';
	if (launchArgs.length === 2) {
		//program was launched without arguments
		let questions = [
			"What colors you need? (names, space separated, in order) \n",
			"What information you need? (all, hex, rgb) "
		]
		getAnswers(questions).then(answers => {
			//colors in first answer
			//faulty input error handled in API
			colorOrder.push(...answers[0].split(' '));

			//output type answer
			outputType = answers[1];
			//return results
			printResult(colorOrder, outputType);
		});
	} else {
		//program was launched with arguments
		if (launchArgs[2] === 'default') {
			//set default colors and order
			colorOrder.push(...['green', 'blue', 'red'])
		} else {
			//colors and orders choice is manual
			for (let i = 2; i < launchArgs.length - 1; i++) {
				colorOrder.push(launchArgs[i]);
			}

			//check if output type is provided or forgotten
			let lastArg = launchArgs[launchArgs.length - 1];
			if (lastArg === "rgb" || lastArg === "all" || lastArg === "hex") {
				outputType = launchArgs[launchArgs.length - 1];
			} else {
				colorOrder.push(lastArg);
			}
		}


		printResult(colorOrder, outputType);
	}
}

const printResult = (colorOrder, outputType) => {
	getColors(colorOrder, async function (colors) {
		colors = await Promise.all(colors);
		for (const color of colors) {
			switch (outputType) {
				case 'all':
					console.log(color.name + " = hex: " + color.HEX + " rgb: " + color.RGB.R + ', ' + color.RGB.G + ', ' + color.RGB.B)
					break;
				case 'rgb':
					console.log(color.RGB.R + ',' + color.RGB.G + ',' + color.RGB.B);
					break;
				default:
					console.log(color.HEX);
					break;
			}
		}
	});
}


colors();
