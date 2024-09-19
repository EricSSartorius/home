<script>
	import BlobWrapper from './BlobWrapper.svelte';
	import Seo from './SEO.svelte';

	let { children, hasBlob = false, title = '', seoDescription = '', seoTitle = '' } = $props();
</script>

<Seo title={seoTitle || title} description={seoDescription} />

{#snippet pageHead()}
	<div>
		<div class="text-center">
			{#if title}
				<h1 class="secondary">{title}</h1>
			{/if}
		</div>
		{@render children()}
	</div>
{/snippet}

{#if hasBlob}
	<BlobWrapper>
		{@render pageHead()}
	</BlobWrapper>
{:else}
	{@render pageHead()}
{/if}
