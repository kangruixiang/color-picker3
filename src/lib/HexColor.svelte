<script lang="ts">
	import { mainColor } from '$lib/stores';
	function changeColor(e) {
		mainColor.fromHex(e.target.value);
	}
</script>

<span class="flex">
	hex:
	<input
		class="bg-zinc-50 dark:bg-zinc-800 inline-block border border-zinc-400 dark:border-zinc-600 mx-1 w-20"
		type="text"
		value={$mainColor.hex}
		on:change={(e) => changeColor(e)}
	/>
</span>
