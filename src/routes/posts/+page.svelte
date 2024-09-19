<script lang="ts">
	import PostPreview from './PostPreview.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';

	export let data;
</script>

<PageLayout seoDescription="Posts">
	{#each data.posts as post, index}
		<PostPreview {post} />
		{#if index < data.posts.length - 1}
			<hr />
		{/if}
	{/each}
</PageLayout>

<style>
	hr {
		border: 0;
		border-top: 1px solid var(--border-color);
		width: 50%;
		margin: var(--gap-lg) auto;
	}
</style>
