<script>
	import { page } from '$app/stores';
</script>

<nav>
	<a class:active={$page.url.pathname === '/'} href="/">About</a>
	<a class:active={$page.url.pathname.startsWith('/posts')} href="/posts">Posts</a>
	<a class:active={$page.url.pathname.startsWith('/resume')} href="/contact">Resume</a>
	<a class:active={$page.url.pathname.startsWith('/contact')} href="/contact">Contact</a>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--gap);
		margin-bottom: var(--gap-xl);
	}

	a {
		text-decoration: none;
		color: var(--text);
		font-family: var(--heading-font-family);
		line-height: 1.4;
		margin-block: 0.2em;
		text-wrap: balance;
		color: var(--white);
		font-size: var(--font-size-xl);
		border-bottom: 2px solid transparent;
	}

	a.active {
		border-bottom: 2px solid var(--border-color);
	}
</style>
