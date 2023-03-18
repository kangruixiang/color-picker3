<script lang="ts">
	let current = 'main';
</script>

<div class="flex space-x-4">
	<a
		href="/"
		class="hover:underline
		"
		class:selected={current === 'main'}
		on:click={() => (current = 'main')}>color picker</a
	>
	<a
		href="/theme"
		class="hover:underline"
		class:selected={current === 'theme'}
		on:click={() => (current = 'theme')}>monochromatic scheme</a
	>
</div>

<style>
	.selected {
		text-decoration: underline;
	}
</style>
