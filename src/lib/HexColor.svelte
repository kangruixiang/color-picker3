<script lang="ts">
	import { mainColor } from '$lib/stores';
	function changeColor(e) {
		mainColor.fromHex(e.target.value);
	}
</script>

hex:
<input
	class="bg-zinc-50 inline-block"
	type="text"
	value={$mainColor.hex}
	on:change={(e) => changeColor(e)}
/>
