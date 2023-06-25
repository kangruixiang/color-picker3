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
	class="px-3 py-3  active:bg-zinc-100 border-black rounded dark:bg-[#d6a043] dark:text-zinc-800 dark:active:bg-[#b47b18] border-2 tracking-widest font-semibold hover:-translate-x-px hover:-translate-y-px transition-transform hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] random"
	on:click={random}>Random</button
>
