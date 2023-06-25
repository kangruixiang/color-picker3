<script lang="ts">
	import { mainColor } from './stores';
	import HexColor from '$lib/HexColor.svelte';
</script>

<div class="flex space-x-4">
	<div
		style="background-color:{$mainColor.hex}"
		class="h-40 aspect-square border-black border-2 rounded hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 transition-transform"
	/>
	<div class="w-36">
		<p>
			<HexColor />
			hsv: {$mainColor.hue}
			{$mainColor.saturation}
			{$mainColor.value}<br />
			rgb: {$mainColor.red}
			{$mainColor.green}
			{$mainColor.blue}<br />
			cmy: {$mainColor.cyan}
			{$mainColor.magenta}
			{$mainColor.yellow}<br />
		</p>
	</div>
</div>
