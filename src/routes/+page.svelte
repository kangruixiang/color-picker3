<script lang="ts">
	import SlidersCard from '$lib/SlidersCard.svelte';

	import { hsv, hex, rgb, cmyk } from '$lib/stores';

	export let data;
	console.log(data);

	function random() {
		hsv.reset();
	}
</script>

<main class="h-screen flex flex-col items-center justify-center space-y-4  ">
	<div style="background-color:{$hex}" class="h-40 aspect-square border-black border-2" />
	{$hex}
	<div class="w-full max-w-4xl"><SlidersCard /></div>
	<button class="px-3 py-2 border active:bg-zinc-100 border-zinc-600" on:click={random}
		>Random</button
	>
</main>
