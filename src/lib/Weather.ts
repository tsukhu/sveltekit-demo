export const temperatureConverter = (valNum) => {
	valNum = parseFloat(valNum);
	const celsius = valNum - 273;
	const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
	return { celsius: Math.round(celsius).toFixed(2), fahrenheit: Math.round(fahrenheit).toFixed(2) };
};
