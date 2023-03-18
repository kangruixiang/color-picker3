<script lang="ts">
	import Slider from '$lib/Slider.svelte';
	import { mainColor, value0, value100, saturation0, saturation100, textColor } from '$lib/stores';

	$: listOfProps = [
		{
			color: $mainColor.hue,
			value: 'hue',
			max: 360,
			background:
				'background: linear-gradient(to right, #d42b2b 0%, #cdcd32 17%, #54ab54 33%, #55aaaa 50%, #2020df 67%, #ab54ab 83%, #d42b2b 100%);'
		},
		{
			color: $mainColor.saturation,
			value: 'saturation',
			max: 100,
			background: `background: linear-gradient(to right, ${$saturation0}, ${$saturation100})`
		},
		{
			color: $mainColor.value,
			value: 'value',
			max: 100,
			background: `background: linear-gradient(to right, ${$value0}, ${$value100})`
		},
		{
			color: $mainColor.red,
			value: 'red',
			max: 255,
			background: 'background: linear-gradient(to right, #808080, #cc3333);'
		},
		{
			color: $mainColor.green,
			value: 'green',
			max: 255,
			background: 'background: linear-gradient(to right, #808080, #33cc33);'
		},
		{
			color: $mainColor.blue,
			value: 'blue',
			max: 255,
			background: 'background: linear-gradient(to right, #808080, #3333cc);'
		},
		{
			color: $mainColor.cyan,
			value: 'cyan',
			max: 100,
			background: 'background: linear-gradient(to right, #808080, #4ca0c8);'
		},
		{
			color: $mainColor.magenta,
			value: 'magenta',
			max: 100,
			background: 'background: linear-gradient(to right, #808080, #c25b5b);'
		},
		{
			color: $mainColor.yellow,
			value: 'yellow',
			max: 100,
			background: 'background: linear-gradient(to right, #808080, #ecda83);'
		}
	];
	$: hsvProps = listOfProps.slice(0, 3);
	$: rgbProps = listOfProps.slice(3, 6);
	$: cmyProps = listOfProps.slice(6, 9);
</script>

<div class="flex flex-col space-y-4 font-semibold">
	<div class="flex flex-col border border-zinc-600 rounded-md p-4">
		{#each hsvProps as item}
			<Slider
				color={item.color}
				value={item.value}
				min={0}
				max={item.max}
				background={item.background}
				>{item.value.charAt(0).toUpperCase()}{item.value.slice(1)}</Slider
			>
		{/each}
	</div>
	<div class="flex flex-col border border-zinc-600 rounded-md p-4">
		{#each rgbProps as item}
			<Slider
				color={item.color}
				value={item.value}
				min={0}
				max={item.max}
				background={item.background}
				>{item.value.charAt(0).toUpperCase()}{item.value.slice(1)}</Slider
			>
		{/each}
	</div>
	<div class="flex flex-col border border-zinc-600 rounded-md p-4">
		{#each cmyProps as item}
			<Slider
				color={item.color}
				value={item.value}
				min={0}
				max={item.max}
				background={item.background}
				>{item.value.charAt(0).toUpperCase()}{item.value.slice(1)}</Slider
			>
		{/each}
	</div>
</div>
