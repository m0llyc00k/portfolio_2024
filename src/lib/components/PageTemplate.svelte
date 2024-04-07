<script>
	import NavigationLink from './NavigationLink.svelte';
	export let title;
</script>

<main id="main">
	<section class="section">
		<div class="container">
			<div class="row">
				<div class="column" style="flex: 2;">
					<slot name="col-1" />
				</div>
				<div class="column" style="flex: 1;">
					<h1>{title}</h1>
					<slot name="col-2" />
				</div>
			</div>
			<NavigationLink />
		</div>
	</section>
</main>

<style>
	.section {
		padding: 2em;
	}

	.container {
		max-width: 1200px;
		margin: auto;
		/* padding: 0 15px; */
	}

	.row {
		display: flex;
		/* flex-wrap: wrap; */
		gap: 3em; /* Gap between columns */
	}

	.column {
		flex: 1 1 auto;
	}

	.video {
		width: 100%;
		height: auto;
	}

	.text {
		line-height: 1.5em;
	}

	.list {
		list-style: none;
		padding: 0;
	}

	.list li {
		margin-bottom: 10px;
	}

	.link {
		/* color: #357a8e; */
		/* border: 1px solid #357a8e;
		border-radius: 2px; */
		padding: 1px;
		/* text-decoration: underline; */
	}
	.column img {
		padding-top: 1em;
	}

	/* Add this media query to adjust layout for smaller screens */
	@media screen and (max-width: 768px) {
		.row {
			flex-direction: column; /* Change flex direction to column for smaller screens */
			gap: 1em;
		}
		.section {
			padding: 3vh 0;
		}

		.column {
			flex: 1 1 auto;
			width: 100%; /* Ensure columns take full width on smaller screens */
		}

		.container {
			margin: 0 1em;
		}
	}
</style>
