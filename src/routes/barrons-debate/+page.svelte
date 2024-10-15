<script>
	import PageTemplate from '$lib/components/PageTemplate.svelte';
	import images from '$lib/data/debate.ts';
	import { onMount } from 'svelte';

	const path = '/images/debate/';
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
	<PageTemplate title="Barron's Economic Debate Tracker">
		<div slot="col-1" class="col-1">
			{#each images as img}
				<img loading="lazy" class="img" src="{path}{img.img_name}.png" alt={img.alt_text} />
			{/each}
		</div>

		<div slot="col-2">
			<p class="text">
				I tracked the speaking time of the presidential debate between Donald Trump and Kamala
				Harris, analyzing the topics and subtopics related to the economy, down to the second.
			</p>
			<p class="text">
				Alongside another reporter, we analyzed the debate data and contextualized the significance
				of each candidate's speaking time concerning their policies and plans.
			</p>
			<p class="link">
				<a href="https://www.barrons.com/articles/trump-harris-debate-economy-talk-ace5460d"
					>Link to article.</a
				>
			</p>
		</div>
	</PageTemplate>
{:else}
	<h2 class="loading">Loading images ...</h2>
{/if}

<style>
	.loading {
		margin: 0px auto;
		position: relative;
		top: 30vh;
	}
	.img {
		width: 100%;
		height: auto;
		margin-bottom: 2em;
		border: 3px solid white;
	}
	.text {
		line-height: 1.5em;
	}

	.link {
		padding: 1px;
	}
	.link:hover {
		text-decoration: underline;
	}
	.col-1 {
		max-width: 100%;
		margin: 0 auto;
	}
</style>
