<script lang="ts">
	import BlobWrapper from '$lib/components/BlobWrapper.svelte';
	import Construction from '$lib/components/Construction.svelte';
	import '../styles/index.css';
	import Menu from './Menu.svelte';
	const { children } = $props();
</script>

<Construction />
<main class="relative">
	<BlobWrapper>
		<h1 class="text-gradient text-center margin-top"><a href="/">Eric Sartorius</a></h1>
		<Menu />
		{@render children()}
	</BlobWrapper>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		max-width: 800px;
		margin: 0 auto;
		padding: var(--gap-lg) var(--gap-lg) var(--gap-xl) var(--gap-lg);
	}
</style>
