<script lang="ts">
	import MainColor from '$lib/MainColor.svelte';
	import Slider from '$lib/Slider.svelte';
	import { valIncrement, satIncrement, mainColor } from '$lib/stores.js';
	import { constArray, hslToHex } from '$lib/process';
	import Alternate from '$lib/Alternate.svelte';

	const incrementList = constArray(-8, 8, 1).filter((item) => item != 0);

	$: saturationAlt = incrementList.map((increment) => {
		return Math.max(0, Math.min($mainColor.saturation - increment * $satIncrement, 100));
	});

	$: valueAlt = incrementList.map((increment) => {
		return Math.max(0, Math.min($mainColor.value + increment * $valIncrement, 100));
	});
</script>

<div class="flex flex-col md:flex-row">
	<MainColor />
	<div class="px-8 font-semibold">
		<Slider min={0} max={10} step={0.1} bind:color={$satIncrement}>Saturation Steps</Slider>
		<Slider min={0} max={10} step={0.1} bind:color={$valIncrement}>Value Steps</Slider>
	</div>
</div>

<div
	class="text-zinc-300 grid md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12 gap-y-4 overflow-y-auto py-10 px-8 auto-rows-min xl:content-center w-full"
>
	{#each incrementList as step, i}
		<div>
			<Alternate
				color={hslToHex($mainColor.hue, saturationAlt[i], valueAlt[i])}
				saturationAlt={saturationAlt[i]}
				valueAlt={valueAlt[i]}
			/>
		</div>
	{/each}
</div>
