<script type="ts">
	export let data = 0;
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let color;
	export let background = 'background: gray';
	import { hexToHSL, rgbToHex, cmykToRgb } from '$lib/process';
	import {
		value0,
		value100,
		saturation0,
		saturation100,
		textColor,
		hsv,
		rgb,
		cmyk
	} from '$lib/stores';

	function changeColor(event, color) {
		let newHex = '';
		if (color == 'hue') {
			$hsv.hue = event.target.valueAsNumber;
			return;
		}
		if (color == 'saturation') {
			$hsv.saturation = event.target.valueAsNumber;
			return;
		}
		if (color == 'value') {
			$hsv.value = event.target.valueAsNumber;
			return;
		}
		if (color == 'red') {
			newHex = rgbToHex(event.target.valueAsNumber, $rgb.green, $rgb.blue);
		}
		if (color == 'green') {
			newHex = rgbToHex($rgb.red, event.target.valueAsNumber, $rgb.blue);
		}
		if (color == 'blue') {
			newHex = rgbToHex($rgb.red, $rgb.green, event.target.valueAsNumber);
		}
		if (color == 'yellow') {
			const newRGB = cmykToRgb($cmyk.cyan, $cmyk.magenta, event.target.valueAsNumber, $cmyk.key);
			newHex = rgbToHex(newRGB.red, newRGB.green, newRGB.blue);
		}
		if (color == 'cyan') {
			const newRGB = cmykToRgb(event.target.valueAsNumber, $cmyk.magenta, $cmyk.yellow, $cmyk.key);
			newHex = rgbToHex(newRGB.red, newRGB.green, newRGB.blue);
		}
		if (color == 'magenta') {
			const newRGB = cmykToRgb($cmyk.cyan, event.target.valueAsNumber, $cmyk.yellow, $cmyk.key);
			newHex = rgbToHex(newRGB.red, newRGB.green, newRGB.blue);
		}
		if (color == 'key') {
			const newRGB = cmykToRgb($cmyk.cyan, $cmyk.magenta, $cmyk.yellow, event.target.valueAsNumber);
			newHex = rgbToHex(newRGB.red, newRGB.green, newRGB.blue);
		}

		const newHSV = hexToHSL(newHex);
		$hsv.hue = newHSV.hue;
		$hsv.saturation = newHSV.saturation;
		$hsv.value = newHSV.value;
	}
</script>

<div class="w-full text-zinc-800">
	<label for="slider" class="" />
	<slot />
	<div class="flex items-center">
		<input
			type="range"
			class="slider w-full appearance-none h-4"
			tabindex="-1"
			style={background}
			value={data}
			on:input={(e) => changeColor(e, color)}
			{min}
			{max}
			{step}
		/>

		<input
			type="number"
			class="px-2 py-2 font-semibold rounded-md focus:ring-0 focus:outline-none w-12"
			value={Math.round(data)}
		/>
	</div>
</div>

<style>
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		width: 20px; /* Set a specific slider handle width */
		height: 20px; /* Slider handle height */
		background: #282828; /* Green background */
		cursor: pointer; /* Cursor on hover */
		/* border-radius: 100%; */
		border: none;
	}

	.slider::-moz-range-thumb {
		width: 18px; /* Set a specific slider handle width */
		height: 18px; /* Slider handle height */
		background: #282828; /* Green background */
		cursor: pointer; /* Cursor on hover */
		/* border-radius: 100%; */
		border: none;
		/* border: 1px solid #191919; */
		/* box-shadow: #7e7e7e 0px 2px 3px 0px; */
		transition: width 150ms, height 150ms;
	}

	.slider::-moz-range-thumb:active {
		width: 10px;
		height: 40px;
	}

	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
