<script>
	import { formatDate } from '$lib/utils';

	export let data;
</script>

{#if data}
	<article>
		<h2>
			{data.meta.title}
		</h2>

		<h6>
			{formatDate(data.meta.date)}
		</h6>

		<svelte:component this={data.content} />

		<a class="posts-btn secondary" href="/posts">👈 Back to posts</a>
	</article>
{/if}

<style>
	:global(article *) {
		font-family: var(--body-font-family);
	}

	:global(article h1, article h2, article h3, article h4, article h5, article h6) {
		margin-top: var(--gap-xl);
		color: var(--title);
	}

	.posts-btn {
		display: block;
		margin-top: var(--gap-xl);
		text-align: center;
		font-weight: var(--bold-weight);
	}
</style>
