<script lang="ts">
	import { mainColor } from './stores';
	import HexColor from '$lib/HexColor.svelte';
</script>

<div class="flex space-x-4">
	<div style="background-color:{$mainColor.hex}" class="h-40 aspect-square border-black border  " />
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
