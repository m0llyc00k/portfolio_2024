<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
	import { modalOpened } from '$lib/store';
	import Wave from '$lib/assets/wave.svg';

	// import projects from '$lib/Projects';
	import projects from '$lib/Data.ts';

	let updatedProjects = projects.filter((d) => d.publish == 'TRUE');
	const path = 'src/lib/assets/img/';
</script>

<svelte:head>
	<title>Molly Cook Escobar - Portfolio</title>
</svelte:head>
<section class="header">
	<h1>
		Hi <img src={Wave} alt="waving hand" class="hand-icon" />, I'm<br /><span
			>Molly Cook Escobar</span
		>
	</h1>
	<div class="intro">
		<span
			>I'm a Front-End Developer and Visual Journalist committed to thoughtful storytelling.</span
		>
		<span>
			Currently based in Queens and on the graphics desk at
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
</section>
<section>
	<div class="projectContainer">
		<div class="projects">
			{#each updatedProjects as project}
				<a href={project.project_url}>
					<div class="projectHeader">
						<div
							class="project"
							style={`background-image: url('${path}${project.img_url}.png'); background-size: cover;`}
						/>
						<!-- <div class="techsContainer">
							Technologies:
							<div class="techs">
								{#each project.technologies as tech}
									<div>{tech}</div>
								{/each}
							</div>
						</div> -->
						<div>
							<h2>
								{project.page_title}
							</h2>
						</div>
						<p class="project-desc">
							{project.desc_text}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	a {
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
		height: calc(100vh - 80px - 310px);
		justify-content: center;
		align-items: center;

		background-color: none;
		border-bottom: solid 6px #f4f4f4;
	}

	.header h1 {
		font-weight: 300;
		margin: 0px 10px 0;
		font-size: 2em;
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

	.project-desc {
		margin: 0;
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

	.projectHeader h2 {
		margin: 0.5em 0 0.5em 0;
		line-height: 1.3;
		font-size: 1.25em;
	}
	.projectHeader {
		text-align: left;
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
			height: calc(100vh - 80px - 200px);
		}
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
		padding-top: 5em;
	}

	a {
		text-decoration: none;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: #363636;
		background: white;
		padding: 2rem;
		width: 100%;
		transition: transform 0.2s ease-in-out;
		border-radius: 10px;

		height: 250px;
		/* width: 650px; */
		margin: 0 auto;
		background-position-y: center;
	}

	.project:hover {
		transition: 0.3s transform ease;
		box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.25);
		opacity: 0.75;
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	@media (min-width: 900px) {
		.projectContainer {
			padding: 0;
		}
		.projects > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.projects {
			grid-template-columns: 1fr;
		}

		.projects .project {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr; /* By default, 1 column */
		grid-gap: 40px;
		margin-top: 30px;
	}

	@media (min-width: 1025px) {
		.projectContainer .projects {
			grid-template-columns: repeat(2, 1fr); /* 2 columns on screens wider than 600px */
		}
	}
</style>
