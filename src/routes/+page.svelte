<script lang="ts">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
	import { modalOpened } from '$lib/store';
	import Wave from '$lib/assets/wave.svg';
	import { onMount } from 'svelte';

	// import projects from '$lib/Projects';
	import projects from '$lib/data/Data.ts';

	let updatedProjects = projects.filter((d) => d.publish == 'TRUE');

	const path =
		'https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/img/';

	const pathVideo =
		'https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/video/';

	let playbackRate = 1;
	let playbackRateFaster = 2;
</script>

<svelte:head>
	<title>Molly Cook Escobar - Portfolio</title>
</svelte:head>
<section class="header-wrap">
	<!-- <div
		style={`background-image: url('${path}map_sketch.png'); background-size: contain;`}
		class="header-bg"
	/> -->
	<div class="header-content header">
		<h1>
			<!-- Hi <img src={Wave} alt="waving hand" class="hand-icon" />, I'm<br /><span
				>Molly Cook Escobar</span
			> -->
			Molly Cook Escobar
		</h1>
		<div class="intro">
			<span>Visual Journalist and Graphics Developer committed to thoughtful storytelling.</span>
			<span>
				Currently based in Queens and making graphics at
				<a class="icon" href="https://www.nytimes.com/by/molly-cook-escobar">The New York Times</a
				>.</span
			>
		</div>
		<div class="icons">
			<div
				role="button"
				tabindex="0"
				on:keypress={() => {
					modalOpened.set(true);
				}}
				on:click={() => {
					modalOpened.set(true);
				}}
			>
				<div class="icon">
					<FaEnvelope />
				</div>
			</div>

			<a
				href="https://github.com/m0llyc00k"
				aria-label="GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaGithub />
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/molly-cook-escobar/"
				aria-label="Linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaLinkedin />
				</div>
			</a>
		</div>
	</div>
</section>
<section>
	<div class="projectContainer">
		<div class="projects">
			{#each updatedProjects as project}
				<a href={project.project_url}>
					<div class="card">
						<div class="img-container">
							{#if project.media_type == 'video'}
								<div class="parent-element-to-video project-img">
									<video
										style={project.img_sketch ? 'transform: scale(1.75); top: 20%;' : ''}
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
								<div
									class="project-img"
									role="button"
									tabindex="0"
									alt={project.alt_text}
									style={`background-image: url(' ${path}${project.img_name}.png'); background-size: cover;`}
								/>
							{/if}
							{#if project.img_sketch}
								<div
									class="project-img"
									role="button"
									tabindex="0"
									alt={'Sketch of ' + project.alt_text}
									style={project.img_name === 'jan-6'
										? `background-image: url('${path}${project.img_sketch}.png'); background-size: cover; opacity: 0.6;  `
										: `background-image: url('${path}${project.img_sketch}.png'); background-size: cover;`}
								/>
							{/if}
						</div>

						<div class="project-info">
							<div style="margin-bottom:.75em;">
								<h2 class="project-title">
									{project.page_title}
								</h2>
								<p class="project-desc org" style="color: #767676;">{project.org}</p>
							</div>
							<p class="project-desc">
								{project.desc_text}
							</p>
							<p class="project-desc">
								<b>Responsibilities: </b>{project.responsibilities}
							</p>
							<p class="project-desc">
								<b>Tools: </b>{project.tools}
							</p>
							{#if project.awards}
								<p class="project-desc">
									<b>Awards and mentions: </b>{project.awards}
								</p>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.icon {
		color: #357a8e;
		text-decoration: none;
	}
	.header {
		text-align: center;
		margin: 0 auto;
		padding: 0 10px;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(95vh - 80px - 400px);
		justify-content: center;
		align-items: center;

		background-color: none;
		border-bottom: solid 6px #f4f4f4;
	}

	.header h1 {
		font-weight: 700;
		margin: 0px 10px 0;
		font-size: 2.5em;
		line-height: 1.2em;
	}

	.header h1 span {
		font-weight: 700;
	}

	.intro {
		font-weight: 300;
		font-size: 1.1em;
		padding-top: 1em;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	.header-wrap {
		/* overflow: hidden; */
		position: relative;
	}

	.header-bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 75%;
	}

	/* .header-content {
		position: relative;
		background-color: rgba(235, 235, 235, 0.8);
		box-shadow: 0 0 50px 50px rgba(235, 235, 235, 0.25) inset;
	} */
	/* .header-content::before {
		--width-blur: 90%;
		--height-blur: 100%;
		content: '';
		position: absolute;
		width: var(--width-blur);
		height: var(--height-blur);
		left: calc((100% - var(--width-blur)) / 2);
		top: calc((100% - var(--height-blur)) / 2);
		background-color: rgba(235, 235, 235, 1); /* Same background color as header content */
	/* border-radius: 5px; /* Adjust the radius as needed */
	/* z-index: -1; Ensure the pseudo-element is behind the content */
	/* filter: blur(4px); Adjust the blur amount as needed */
	/* }  */

	.header-content {
		position: relative; /* Ensure the pseudo-element is positioned relative to the header content */
		z-index: 1; /* Ensure the header content is above the pseudo-element */
		/* Other existing styles for .header-content */
	}

	.project-desc {
		margin: 0;
		font-size: 0.85rem;
		padding: 0.25em 0;
		line-height: 1.5em;
	}
	.project-title {
		text-decoration: none;
	}
	.card:hover h2 {
		text-decoration: underline;
	}
	.project-info {
		padding: 20px;
		color: #363636;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		/* max-width: 200px; */
		margin: 30px auto 0;
	}

	.card h2 {
		margin: 0.5em 0 0 0;
		line-height: 1.3;
		font-size: 1.25em;
	}
	.card {
		text-align: left;
		background-color: #ffffff;
		/* height: 350px; */
		--radius: 5px;
		border-radius: var(--radius);
		border: 2px solid #cccccc;
		transition: box-shadow 0.2s linear; /* Change border to box-shadow transition */
	}

	.card:hover {
		box-shadow: 0px 0px 0px 10px #faf9f9; /* Increase shadow size instead of border width */
	}

	.icon {
		color: #357a8e;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 25px;
	}
	.icon:hover {
		color: #767676;
	}

	.hand-icon {
		width: 25px;
	}

	@media (min-width: 600px) {
		.header {
			max-width: none;
		}
		.intro {
			gap: 5px;
		}
	}

	.projectContainer {
		width: 100%;
		max-width: 1200px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 0 1em 1em 1em;
		margin: 0 auto;
		text-align: center;
		padding-top: 5em;
	}

	a {
		text-decoration: none;
	}

	.parent-element-to-video {
		overflow: hidden;
		margin: 0 auto;
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 30px;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	@media (min-width: 900px) {
		.projectContainer {
			width: 100%;
			/* max-width: 1200px; */
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			text-align: center;
			padding: 0 1em 1em 1em;
			margin: 0 auto;
			text-align: center;
		}

		.projects {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.icon {
			color: #357a8e;
			cursor: pointer;
			transition: color 0.2s ease-in-out;
			width: 25px;
			gap: 15px;
		}
		.header {
			background-color: #fff;
			height: calc(90vh - 80px - 200px);
		}
		.project-img video {
			width: 100%;
			height: auto; /* Allow the video to maintain its aspect ratio */
			object-fit: cover; /* Cover the entire container */
			object-position: center; /* Center the video horizontally and vertically */
			transform: translate(0px, 0);
		}

		.projectContainer {
			width: 100%;
			/* max-width: 1200px; */
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			text-align: center;
			padding: 0 1em 1em 1em;
			margin: 0 auto;
			text-align: center;
		}
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}
		.projectContainer {
			padding-top: 1em;
		}
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr; /* By default, 1 column */
		grid-gap: px;
		margin-top: 30px;
	}

	@media (min-width: 1025px) {
		.projectContainer .projects {
			grid-template-columns: repeat(2, 1fr);
			/* 2 columns on screens wider than 600px */
		}
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 20px;
	}

	.card {
		display: flex;
		flex-direction: column;
		height: 100%; /* Ensures all card elements take up the same height */
	}
	.img-container {
		display: flex; /* Added flex display to contain images */
	}

	.project-img {
		flex: 1; /* Make images share the container space */
		height: 250px; /* Set a fixed height for the container */
		border-top-left-radius: calc(0.25rem - 1px);
		border-top-right-radius: calc(0.25rem - 1px);
		overflow: hidden; /* Hide overflowing content */
		background-position-x: center;
		background-position-y: center;
		background-size: cover;
		margin: 0.15em;
	}

	.project-img video {
		width: 100%;
		height: auto; /* Allow the video to maintain its aspect ratio */
		object-fit: cover; /* Cover the entire container */
		object-position: center; /* Center the video horizontally */
		position: relative; /* Add position relative */
	}
	@media (max-width: 600px) {
		.project-img {
			height: 100%;
			min-height: 175px;
		}
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 30px;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	@media (min-width: 1025px) {
		.projectContainer .projects {
			grid-template-columns: repeat(2, 1fr);
			/* 2 columns on screens wider than 1025px */
		}
	}
</style>
