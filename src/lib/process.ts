type Hexcode = string
type HSL = {
	hue: number,
	saturation: number,
	value: number
}
type RGB = {
	red: number,
	green: number,
	blue: number
}
type CMYK = {
	cyan: number,
	magenta: number,
	yellow: number,
	key: number
}

export function hslToHex(hue: number, saturation: number, value: number) {
	value /= 100;
	let a = (saturation * Math.min(value, 1 - value)) / 100;
	let f = (n) => {
		let k = (n + hue / 30) % 12;
		let color = value - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0'); // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}` as Hexcode;
}

export function hexToHSL(H: Hexcode) {

	if (typeof H !== "string") {
		console.log("Color is not in string format")
		return
	}
	// Convert hex to RGB first
	let red = 0,
		green = 0,
		blue = 0;
	if (H.length == 4) {
		red = '0x' + H[1] + H[1];
		green = '0x' + H[2] + H[2];
		blue = '0x' + H[3] + H[3];
	} else if (H.length == 7) {
		red = '0x' + H[1] + H[2];
		green = '0x' + H[3] + H[4];
		blue = '0x' + H[5] + H[6];
	}
	// Then to HSL
	red /= 255;
	green /= 255;
	blue /= 255;

	let cmin = Math.min(red, green, blue),
		cmax = Math.max(red, green, blue),
		delta = cmax - cmin,
		hue = 0,
		saturation = 0,
		value = 0;

	if (delta == 0) hue = 0;
	else if (cmax == red) hue = ((green - blue) / delta) % 6;
	else if (cmax == green) hue = (blue - red) / delta + 2;
	else hue = (red - green) / delta + 4;

	hue = Math.round(hue * 60);

	if (hue < 0) hue += 360;

	value = (cmax + cmin) / 2;
	saturation = delta == 0 ? 0 : delta / (1 - Math.abs(2 * value - 1));
	saturation = +(saturation * 100).toFixed(0);
	value = +(value * 100).toFixed(0);

	return { hue, saturation, value } as HSL;
}

export function cmykToHex(c: number, m: number, y: number, k: number) {

	//convert cmyk to rgb first
	const rgb = cmykToRgb(c, m, y, k);
	//then convert rgb to hex
	const hex = rgbToHex(rgb.red, rgb.green, rgb.blue);
	//return hex color format
	return hex;
}

export function cmykToRgb(c: number, m: number, y: number, k: number) {
	let red,
		green,
		blue,
		cyan = 0.01 * Number(c),
		magenta = 0.01 * Number(m),
		yellow = 0.01 * Number(y),
		black = 0.01 * Number(k);

	red = +(255 * (1 - cyan) * (1 - black)).toFixed()
	green = +(255 * (1 - magenta) * (1 - black)).toFixed()
	blue = +(255 * (1 - yellow) * (1 - black)).toFixed()

	return { red, green, blue } as RGB;
}

export function rgbToHex(red: number, green: number, blue: number) {
	return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
	function componentToHex(c: number) {
		var hex = c.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	}
}

export function rgbToCmyk(red: number, green: number, blue: number) {
	const r = red / 255;
	const g = green / 255;
	const b = blue / 255;

	const k = +(1 - Math.max(r, g, b))
	const c = +((1 - r - k) / (1 - k) || 0)
	const m = +((1 - g - k) / (1 - k) || 0)
	const y = +((1 - b - k) / (1 - k) || 0);

	function multiplyAndRound(color: number) {
		return +(color * 100).toFixed()
	}

	const key = multiplyAndRound(k)
	const cyan = multiplyAndRound(c)
	const magenta = multiplyAndRound(m)
	const yellow = multiplyAndRound(y)

	return { cyan, magenta, yellow, key } as CMYK;
}

export function hexToRGB(hex: Hexcode) {

	const red = parseInt(hex.slice(1, 3), 16);
	const green = parseInt(hex.slice(3, 5), 16);
	const blue = parseInt(hex.slice(5, 7), 16);

	return { red, green, blue } as RGB
}

export function hslToCMYK(hue: number, saturation: number, value: number) {
	const hex = hslToHex(hue, saturation, value)
	const rgb = hexToRGB(hex)
	const cmyk = rgbToCmyk(rgb.red, rgb.green, rgb.blue)
	return cmyk
}

export function constArray(start: number, stop: number, step: number) {
	return Array.from({
		length: (stop - start) / step + 1
	}, (value, index) => start + index * step
	)
}