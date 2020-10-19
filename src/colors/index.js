const { Red } = require('./Red');
const { Blue } = require('./Blue');
const { Green } = require('./Green');
const { Black } = require('./Black');
const { White } = require('./White');

exports.createObjects = (colors) => {
  const classObjects = [];
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    let object = null;
    switch (color.name) {
      case 'red':
        object = new Red();
        break;
      case 'blue':
        object = new Blue();
        break;
      case 'green':
        object = new Green();
        break;
      case 'black':
        object = new Black();
        break;
      case 'white':
        object = new White();
        break;
    }
    object.setHex(color.HEX);
    object.setRgb(color.RGB);
    classObjects.push(objects);
  }
}