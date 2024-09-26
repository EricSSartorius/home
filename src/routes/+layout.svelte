<script lang="ts">
	import BlobWrapper from '$lib/components/BlobWrapper.svelte';
	// import Construction from '$lib/components/Construction.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import '../styles/index.css';
	import Menu from './Menu.svelte';
	const { children } = $props();
</script>

<!-- <Construction /> -->
<div class="site-wrapper">
	<BlobWrapper>
		<h1 class="text-gradient text-center margin-top"><a href="/">Eric Sartorius</a></h1>
		<Menu />
		<main>
			{@render children()}
		</main>
	</BlobWrapper>
</div>
<footer>
	<SocialMedia />
	<span class="subtext text-sm">&copy;{new Date().getFullYear()}</span>
</footer>

<style>
	.site-wrapper {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding: var(--gap-lg) var(--gap-lg) var(--gap-xl) var(--gap-lg);
	}

	main {
		margin: 0 auto;
		max-width: 800px;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: var(--gap-xl) var(--gap);
		gap: var(--gap);
	}
</style>
