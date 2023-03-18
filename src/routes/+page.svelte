<script lang="ts">
	import SlidersCard from '$lib/SlidersCard.svelte';
	import HexColor from '$lib/HexColor.svelte';
	import { mainColor } from '$lib/stores';

	export let data;
	console.log(data);

	function random() {
		mainColor.reset();
	}
</script>

<main class="h-screen flex flex-col items-center justify-center space-y-4  ">
	<div class="flex space-x-4 w-full items-center justify-center">
		<div
			style="background-color:{$mainColor.hex}"
			class="h-40 aspect-square border-black border-2"
		/>
		<div class="w-36">
			<p>
				<HexColor />
				hsv: {$mainColor.hue}
				{$mainColor.saturation}
				{$mainColor.value}<br />
				hex: {$mainColor.hex}<br />
				rgb: {$mainColor.red}
				{$mainColor.green}
				{$mainColor.blue}<br />
			</p>
		</div>
	</div>
	<div class="w-full max-w-4xl"><SlidersCard /></div>
	<button class="px-3 py-2 border active:bg-zinc-100 border-zinc-600" on:click={random}
		>Random</button
	>
</main>
