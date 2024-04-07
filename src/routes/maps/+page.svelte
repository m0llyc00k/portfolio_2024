<script>
	import { images } from './images';
	import { onMount } from 'svelte';

	// const load = (async () => {
	// 	return images.map((img) => ({
	// 		src: `https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/img/${img.url}`
	// 	}));
	// })();

	onMount(() => {
		// Save the current URL in local storage when the component mounts
		localStorage.setItem('previousPage', window.location.href);
	});
	let imagesNew = images.map((img) => ({
		src: `https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/img/${img.url}`
	}));
</script>

<!-- {#await load}
	... loading
{:then images} -->
<div class="projectContainer">
	<h1 class="title">A collection of maps made in QGIS</h1>
	{#each imagesNew as image, index}
		<!-- <Gallery {images}> -->
		<img class="img" src={image.src} alt="" />
		<!-- </Gallery> -->
	{/each}
</div>
<button
	style="width: 100px; margin: 0 auto; margin-top: 1em; color: #767676;"
	on:click={() => (window.location.href = '/')}>Back to Main</button
>

<!-- {/await} -->

<style>
	.img {
		transition: transform 225ms ease-in-out;
		width: 50%;
		padding-top: 3em;
	}
	.img:hover {
		transform: scale(1.1);
	}
	.title {
		padding-bottom: 0;
	}
	.projectContainer {
		width: 100%;
		max-width: 1200px;
		padding: 0 1em 1em 1em;
		margin: 0 auto;
		text-align: center;
		padding-top: 5em;
	}

	@media (max-width: 600px) {
		.projectContainer {
			width: 90%;
			max-width: 1200px;
			padding: 0;
			margin: 0 auto;
			text-align: center;
		}
		.img {
			transition: transform 225ms ease-in-out;
			width: 100%;
			padding-top: 2em;
		}
		.title {
			padding-bottom: 0.25em;
		}
	}
</style>
