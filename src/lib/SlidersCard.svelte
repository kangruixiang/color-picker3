<script lang="ts">
	import Slider from '$lib/Slider.svelte';
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
</script>

<div class="flex flex-col space-y-4 font-semibold">
	<div class="flex flex-col border border-zinc-600 rounded-md p-4">
		<Slider
			data={$hsv.hue}
			min={0}
			max={360}
			color={'hue'}
			background="background: linear-gradient(to right, #d42b2b 0%, #cdcd32 17%, #54ab54 33%, #55aaaa 50%, #2020df 67%, #ab54ab 83%, #d42b2b 100%);"
			>Hue</Slider
		>
		<Slider
			data={$hsv.saturation}
			color={'saturation'}
			background="background: linear-gradient(to right, {$saturation0}, {$saturation100});"
			>Saturation</Slider
		>
		<Slider
			data={$hsv.value}
			color={'value'}
			background="background: linear-gradient(to right, {$value0}, {$value100});">Value</Slider
		>
	</div>
	<div class="flex flex-col border border-zinc-600 rounded-md p-4">
		<Slider
			data={$rgb.red}
			color={'red'}
			max={255}
			background="background: linear-gradient(to right, #f9d7d7, #c25b5b);">Red</Slider
		>
		<Slider
			data={$rgb.green}
			color={'green'}
			max={255}
			background="background: linear-gradient(to right, #d4f2e7, #73d4b2);">Green</Slider
		>
		<Slider
			data={$rgb.blue}
			color={'blue'}
			max={255}
			background="background: linear-gradient(to right, #d4e8f2, #4ca0c8);">Blue</Slider
		>
	</div>
	<div class="flex flex-col border border-zinc-600 rounded-md p-4">
		<Slider
			data={$cmyk.cyan}
			color={'cyan'}
			background="background: linear-gradient(to right, #d4e8f2, #4ca0c8);">Cyan</Slider
		>
		<Slider
			data={$cmyk.magenta}
			color={'magenta'}
			background="background: linear-gradient(to right, #f9d7d7, #c25b5b);">Magenta</Slider
		>
		<Slider
			data={$cmyk.yellow}
			color={'yellow'}
			background="background: linear-gradient(to right, #f7efca, #ecda83);">Yellow</Slider
		>
	</div>
</div>
