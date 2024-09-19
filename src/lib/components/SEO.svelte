<script lang="ts">
	export let description = '';
	export let title = '';
	export let imgUrl: string | undefined;

	const siteMetadata = {
		title: ``,
		description: `A simple homepage for Eric Sartorius.`,
		siteUrl: 'https://www.ericsartorius.com',
		shareImgUrl: '/share-img.png'
	};

	const metaDescription = description || siteMetadata.description;
	const siteTitle = `Eric Sartorius${title ? ` | ${title}` : ''}`;
	const shareImg = `${siteMetadata.siteUrl}${imgUrl || siteMetadata.shareImgUrl}`;
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:type" content="website" />
	<meta property="st:title" content={siteTitle} />
	<meta property="st:info" content={description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={metaDescription} />
	{#if shareImg}
		<meta name="image" content={shareImg} />
		<meta property="og:image" content={shareImg} />
		<meta name="twitter:image" content={shareImg} />
	{/if}
	<slot />
</svelte:head>
