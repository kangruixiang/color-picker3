<script type="ts">
	import { mainColor } from '$lib/stores';
	import { tweened } from 'svelte/motion';
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let color: number;
	export let value: string;
	export let background = 'background: gray';

	let color2 = tweened(color);

	function changeColor() {
		if (value === 'red') {
			mainColor.fromRGB(color, $mainColor.green, $mainColor.blue);
		}

		if (value === 'green') {
			mainColor.fromRGB($mainColor.red, color, $mainColor.blue);
		}

		if (value === 'blue') {
			mainColor.fromRGB($mainColor.red, $mainColor.green, color);
		}

		if (value === 'hue') {
			mainColor.fromHSL(color, $mainColor.saturation, $mainColor.value);
		}

		if (value === 'saturation') {
			mainColor.fromHSL($mainColor.hue, color, $mainColor.value);
		}

		if (value === 'value') {
			mainColor.fromHSL($mainColor.hue, $mainColor.saturation, color);
		}

		if (value === 'cyan') {
			mainColor.fromCMYK(color, $mainColor.magenta, $mainColor.yellow, $mainColor.key);
		}
		if (value === 'magenta') {
			mainColor.fromCMYK($mainColor.cyan, color, $mainColor.yellow, $mainColor.key);
		}
		if (value === 'yellow') {
			mainColor.fromCMYK($mainColor.cyan, $mainColor.magenta, color, $mainColor.key);
		}
		if (value === 'key') {
			mainColor.fromCMYK($mainColor.cyan, $mainColor.magenta, $mainColor.yellow, color);
		}
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
			bind:value={color}
			on:input={changeColor}
			{min}
			{max}
			{step}
		/>

		<input
			type="number"
			class="ml-2 px-2 py-2 font-semibold rounded-md focus:ring-0 focus:outline-none w-12 border "
			bind:value={color}
			on:input={changeColor}
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
