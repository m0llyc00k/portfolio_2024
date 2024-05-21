<script>
	import PageTemplate from '$lib/components/PageTemplate.svelte';
	import polls from '$lib/data/Polls.ts';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const path =
		'https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/img/';
	let mounted = false;
	let imagesLoaded = false;

	onMount(() => {
		setTimeout(() => {
			// Check if all images are complete after waiting
			const imgElements = document.querySelectorAll('.img');
			let allLoaded = true;
			imgElements.forEach((img) => {
				if (!img.complete) {
					allLoaded = false;
				}
			});
			if (allLoaded) {
				imagesLoaded = true;
			} else {
				// If not all images are loaded, set a fallback mechanism
				imgElements.forEach((img) => {
					img.onload = () => {
						const allNowLoaded = Array.from(imgElements).every((img) => img.complete);
						if (allNowLoaded) {
							imagesLoaded = true;
						}
					};
				});
			}
		}, 1000); // Wait for 1 second before checking
	});
</script>

{#if imagesLoaded}
	<PageTemplate title="NYT/ Siena Polls">
		<div slot="col-1" class="col-1">
			{#each polls as img}
				<img class="img" src="{path}{img.img_name}.png" alt={img.alt_text} />
			{/each}
		</div>

		<div slot="col-2">
			<p class="text">
				A curated assortment of visuals from the NYT/Siena poll releases. Collaborating closely with
				politics reporters and election analytics teams, I delved into the nuances of each poll's
				findings to craft compelling narratives and translate them into engaging graphics. Many of
				these visualizations were meticulously crafted within a tight timeframe of just a day or two
				upon receiving the polls, while some required continued adjustments to accommodate evolving
				data dynamics.
			</p>
			<h2>Links to stories</h2>
			<ul class="list">
				{#each polls as link}
					{#if link.url}
						<li class="link">
							<a href={link.url}>{link.title}</a>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</PageTemplate>
{:else}
	<p>Loading images...</p>
{/if}

<style>
	.img {
		width: 100%;
		height: auto;
		margin-bottom: 2em;
		border: 3px solid white;
	}
	.text {
		line-height: 1.5em;
	}

	.list {
		list-style: square;
		padding: 1em;
	}

	.list li {
		margin-bottom: 10px;
	}

	.link {
		padding: 1px;
	}
	.link:hover {
		text-decoration: underline;
	}
	.col-1 {
		max-width: 75%;
		margin: 0 auto;
	}
</style>
