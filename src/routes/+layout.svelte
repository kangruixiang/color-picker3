<script>
	import '../app.postcss';

	import Nav from '$lib/Nav.svelte';
</script>

<div class="max-w-6xl mx-auto flex justify-center"><Nav /></div>

<main
	class="flex flex-col items-center  space-y-4 min-h-screen max-w-6xl py-12 px-2 md:px-0 dark:text-zinc-300 dark:bg-zinc-800 mx-auto"
>
	<slot />
</main>
