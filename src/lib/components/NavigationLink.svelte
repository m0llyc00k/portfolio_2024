<!-- NavigationLink.svelte -->
<script>
	import { goto } from '$app/navigation';
	export let nav = '/';

	function navigateTo(route) {
		// Scroll to the top of the page
		window.scrollTo({
			top: 100,
			left: 100,
			behavior: 'smooth'
		});
		// Navigate to the specified route
		goto(route);
	}
	// on:click={() => (window.location.href = '/')}
</script>

<button class="nav-button" on:click={() => navigateTo(nav)}>Back to Main</button>

<style>
	.nav-button {
		width: 100px;
		margin: 0 auto;
		margin-top: 1em;
		color: #767676;
		display: block;
	}
</style>
