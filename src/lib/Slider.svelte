<script type="ts">
	import { mainColor } from '$lib/stores';
	import { tweened } from 'svelte/motion';
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let color: number;
	export let value = '';
	export let background = 'background: #cecfcf';

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

<div class="w-full ">
	<label for="slider" class="" />
	<slot />

	<div class="flex items-center">
		<input
			type="range"
			class="slider w-full appearance-none rounded-md"
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
			class="ml-2 px-2 py-2 font-semibold rounded-md focus:ring-0 focus:outline-none w-12 border dark:bg-[#1a1a1f] dark:border-none"
			bind:value={color}
			on:input={changeColor}
		/>
	</div>
</div>

<style>
	.slider {
		height: 10px;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		width: 18px;
		height: 18px;
		background: #253755;
		cursor: pointer;
		border-radius: 100%;
		border: none;
		transition: background-color 200ms ease;
	}

	.slider::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background: #253755;
		cursor: pointer;
		border-radius: 100%;
		border: none;
		transition: background-color 200ms ease;
	}

	.slider::-moz-range-thumb:active {
		background: #3e5070;
	}

	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}

	@media (prefers-color-scheme: dark) {
		.slider::-moz-range-thumb {
			background: #f1f1f1;
		}
		.slider::-moz-range-thumb:active {
			background: #f1f1f1;
		}
	}
</style>
