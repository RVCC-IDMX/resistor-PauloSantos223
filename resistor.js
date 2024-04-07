/* resistor.js */

/*
  electronic resistors have colored bands where each color represents a numerical number
  Electrical engineers can read the colors and
  determine the resistance value in Ohms

  see this resistor calculator for help
   http://bit.ly/2NjS274
*/

const getResistorOhms = (bands) => {
  console.log('bands:', bands);

  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

  const multipliers = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    grey: 100000000,
    white: 1000000000,
    gold: 0.1,
    silver: 0.01
  };

  const tolerance = {
    brown: '+/- 1%',
    red: '+/- 2%',
    green: '+/- 0.5%',
    blue: '+/- 0.25%',
    violet: '+/- 0.1%',
    grey: '+/- 0.05%',
    gold: '+/- 5%',
    silver: '+/- 10%'
  };

  const color1Value = colorCodes[bands[0].toLowerCase()];
  const color2Value = colorCodes[bands[1].toLowerCase()];
  const multiplierValue = multipliers[bands[2].toLowerCase()];
  const toleranceValue = tolerance[bands[3].toLowerCase()];

  const resistance = ((color1Value * 10) + color2Value) * multiplierValue;

  return `${resistance} Ohms ${toleranceValue}`;
};

export { getResistorOhms };
