<script lang="ts">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import { modalOpened } from '$lib/store';
	import projects from '$lib/data/Data.ts';
	import { onMount } from 'svelte';
	import { Image } from 'svelte-lazy-loader';
	import './global.css'; // Import your global styles

	let updatedProjects = projects.filter((d) => d.publish === 'TRUE');

	const pathVideo =
		'https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/video/';

	let playbackRate = 1;
	let imagesLoaded = false;
	onMount(() => {
		setTimeout(() => {
			// Check if all images are complete after waiting
			const imgElements = document.querySelectorAll('.project-img');
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

<svelte:head>
	<title>Molly Cook Escobar - Portfolio</title>
</svelte:head>

<section>
	<div class="header-wrap header">
		<h1>Molly Cook Escobar</h1>
		<div class="intro">
			<span>Data and graphics journalist committed to thoughtful storytelling.</span>
		</div>
		<div class="icons">
			<div role="button" tabindex="0" on:click={() => modalOpened.set(true)}>
				<div class="icon"><FaEnvelope /></div>
			</div>
			<a
				href="https://github.com/m0llyc00k"
				aria-label="GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon"><FaGithub /></div>
			</a>
			<a
				href="https://www.linkedin.com/in/molly-cook-escobar/"
				aria-label="LinkedIn"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon"><FaLinkedin /></div>
			</a>
		</div>
	</div>
</section>
{#if imagesLoaded}
	<section>
		<div class="projectContainer">
			<div class="projects">
				{#each updatedProjects as project}
					<a href={project.project_url}>
						<div class="card">
							<div class="img-container">
								{#if project.media_type === 'video'}
									<div class="parent-element-to-video project-img">
										<video
											autoplay
											playsinline
											loop
											muted
											src="{pathVideo}{project.img_name}.mp4"
											id={project.img_name}
											bind:playbackRate
										/>
									</div>
								{:else}
									<div class="project-img">
										<Image
											classes="img-load project-img"
											loading="lazy"
											src={`src/routes/${project.img_name}.png`}
											alt={project.alt_text}
										/>
									</div>
								{/if}
								<!-- {#if project.img_sketch}
								<div
									class="project-img"
									role="button"
									tabindex="0"
									style={`background-image: url('${path}${project.img_sketch}.png'); opacity: 0.6;`}
								/>
							{/if} -->
							</div>
							<div class="project-info">
								<h2 class="project-title">{project.page_title}</h2>
								<p class="project-desc">{project.desc_text}</p>
								<p class="project-desc-resp">{project.responsibilities}</p>
								<p class="project-desc org">{project.org}</p>

								<!-- <p class="project-desc"><b>Tools: </b>{project.tools}</p> -->
								{#if project.awards}
									<p class="project-desc"><b>Awards and mentions: </b>{project.awards}</p>
								{/if}
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
{:else}
	<h2 style="margin: 0 auto;">Loading images...</h2>
{/if}

<style>
	*,
	*::before,
	*::after {
		box-sizing: inherit; /* Inherit box-sizing */
	}

	.project-desc-resp {
		color: #999;
		font-size: 0.85rem;
		padding: 0.25em 0;
		line-height: 1.5em;
		margin: 0;
	}
	.org {
		font-style: italic;
		color: #999;
		margin: 0;
	}
	.project-title {
		margin: 0.35em 0;
	}

	.header-wrap {
		max-width: 1200px; /* Align with body content */
		padding: 0 20px; /* Add padding */
		margin: 0 auto; /* Center the header */
	}

	.projectContainer {
		max-width: 1200px; /* Align with body content */
		margin: 0 auto; /* Center sections horizontally */
		padding: 0 20px; /* Add padding */
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		/* border-bottom: solid 2px #f4f4f4; */
	}

	.header h1 {
		font-weight: 700;
		margin: 50px 0 0; /* Top margin only */
		font-size: 3em;
	}

	.intro {
		font-weight: 300;
		font-size: 1.1em;
		padding-top: 1em;
		max-width: 350px;
	}

	.icons {
		display: flex;
		gap: 20px;
		margin: 20px 0 10px 0;
	}

	.icon {
		color: #357a8e;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 20px;
	}

	.icon:hover {
		color: #767676;
	}

	.projectContainer {
		padding-top: 1em;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust automatically */
		gap: 30px;
		width: 100%;
		margin: 50px 0; /* Margin for spacing */
	}

	.card {
		display: flex;
		flex-direction: column;
		height: 100%; /* Ensures all card elements take up the same height */
		background-color: #ffffff;
		border: 2px solid #cccccc;
		border-radius: 5px;
		transition: box-shadow 0.2s linear;
	}

	.card:hover {
		box-shadow: 15px 15px 15px #d6d6d6; /* Increase shadow size */
	}

	.project-info {
		padding: 15px;
		color: #363636;
	}

	.project-img {
		flex: 1; /* Share container space */
		height: 200px; /* Fixed height for the container */
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background-position: center;
		background-size: cover;
		margin: 0.15em;
	}

	.project-img video {
		width: 100%;
		height: auto;
		object-fit: cover; /* Cover the entire container */
		object-position: center;
	}

	.project-desc {
		margin: 0;
		font-size: 0.85rem;
		padding: 0.25em 0;
		line-height: 1.5em;
	}

	@media (max-width: 600px) {
		.header {
			background-color: #fff;
			height: 350px;
		}

		.project-img {
			height: 100%;
			min-height: 175px; /* Minimum height for project images */
		}

		.projects {
			margin: 10px 0; /* Margin for spacing */
		}
	}

	@media (min-width: 1025px) {
		.projects {
			grid-template-columns: repeat(3, 1fr); /* 3 columns on wider screens */
		}
	}
</style>
