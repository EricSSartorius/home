<script lang="ts">
	import Resume from './Resume.md';
</script>

<div class="resume">
	<Resume />
</div>

<style>
	:global(.resume hr) {
		border: 0;
		border-top: 1px solid var(--border-color);
		margin: var(--gap-xl) auto;
	}

	:global(.resume *) {
		color: var(--text);
		margin: var(--gap) 0;
	}

	:global(.resume h1, .resume h2, .resume h3, .resume h4, .resume h5, .resume h6, .resume) {
		margin-top: var(--gap-xl);
		color: var(--title);
	}

	:global(.resume ul) {
		list-style-type: disc;
		margin-left: var(--gap);
	}
</style>
