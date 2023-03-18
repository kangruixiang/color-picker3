<script lang="ts">
	import MainColor from '$lib/MainColor.svelte';
	import SlidersCard from '$lib/SlidersCard.svelte';
	import { mainColor } from '$lib/stores';

	export let data;
	console.log(data);

	function random() {
		mainColor.reset();
	}
</script>

<MainColor />
<div class="w-full max-w-4xl"><SlidersCard /></div>
<button
	class="px-3 py-2 border active:bg-zinc-100 border-zinc-600 dark:bg-zinc-900 dark:active:bg-zinc-800"
	on:click={random}>Random</button
>
