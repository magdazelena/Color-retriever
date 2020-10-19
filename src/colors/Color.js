class Color {
  hex = "";
  rgb = "";
  constructor(name) {
    this.name = name
  }
  setHex = (hex) => {
    this.hex = hex;
  }
  setRgb = rgb => {
    this.rgb = rgb;
  }
}
exports.Color;