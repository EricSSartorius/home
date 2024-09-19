<script>
	import { formatDate } from '$lib/utils';

	export let post;

	$: ({ title, date, slug } = post);
</script>

<div class="text-center">
	<h2>
		<a href={slug} class="secondary">{title}</a>
	</h2>
	<h5 class="subtext">{formatDate(date)}</h5>
</div>

<style>
	h2 {
		transition-property: all;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}

	h2:hover {
		transform: scale3d(1.05, 1.05, 1);
	}
</style>
