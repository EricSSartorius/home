<script>
	import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<PageLayout seoDescription="Contact">
	<section class="text-center">
		<p>Let's get in touch! I am always open to discuss new opportunities.</p>

		<h3>
			<a href="mailto:ericssartorius@gmail.com">ericssartorius@gmail.com</a>
		</h3>
	</section>
</PageLayout>

<style>
	a {
		font-size: var(--font-size-xxxl);
		color: var(--secondary);
		transition-property: all;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}

	a:hover {
		font-size: calc(var(--font-size-xxxl) + 0.1rem);
	}
</style>
