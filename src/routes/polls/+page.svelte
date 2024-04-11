<script>
	import PageTemplate from '$lib/components/PageTemplate.svelte';
	import polls from '$lib/data/Polls.ts';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const path =
		'https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/img/';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<PageTemplate title="NYT/ Siena Polls">
		<div slot="col-1" class="col-1">
			{#each polls as img}
				<img class="img" src="{path}{img.img_name}.png" alt={img.alt_text} />
			{/each}
		</div>

		<div slot="col-2">
			<p class="text">
				A curated assortment of visuals derived from the NYT/Siena poll releases. Collaborating
				closely with politics reporters, I delved into the nuances of each poll's findings to craft
				compelling narratives and translate them into engaging graphics. Many of these
				visualizations were meticulously crafted within a tight timeframe of just a day or two upon
				receiving the polls, while some required adjustments to accommodate evolving data dynamics.
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
		/* color: #357a8e; */
		/* border: 1px solid #357a8e;
		border-radius: 2px; */
		padding: 1px;
		/* text-decoration: underline; */
	}
	.link:hover {
		text-decoration: underline;
	}
	.col-1 {
		max-width: 75%;
		margin: 0 auto;
	}
</style>
