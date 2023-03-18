<script lang="ts">
	export let color: string, saturationAlt: number, valueAlt: number;
</script>

<div class="flex flex-col text-center bg-zinc-900">
	<div class="h-20 md:h-40 xl:h-60  cursor-pointer" style="background-color: {color}" />
	<div>
		{color}
	</div>
	<div>
		S: {Math.round(saturationAlt)}
	</div>
	<div class="lg:rounded-b-md pb-2">
		V: {Math.round(valueAlt)}
	</div>
</div>
