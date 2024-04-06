<script>
	// import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';
	import { build } from 'vite';

	// let video;
	let start = false;

	onMount(() => {
		// video = document.getElementById('thesis-video');
		// video.play();
	});

	// function togglePlay() {
	// 	if (video.paused) {
	// 		video.play();
	// 	} else {
	// 		video.pause();
	// 	}
	// }
</script>

<main id="main">
	<section class="section">
		<div class="container">
			<div class="row">
				<!-- <div class="column" style="flex: 2;">
					<video controls class="video" id="thesis-video" preload="metadata" muted loop>
						<source
							src="https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/305304fb2d7f58164d9c1af5ae652a5aa9e875f0/src/lib/assets/video/demo_thesis.mp4"
							type="video/mp4"
						/>
						<track kind="captions" />
						Your browser does not support the video tag.
					</video>
					<img
						src="https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/e68309fb58f51251f6c62d29fdbbc6650641c053/src/lib/assets/img/sketches/Molly_Thesis_Sketch.jpg"
						alt="a sketch of the project shown here"
						width="100%"
					/>
				</div> -->
				<div class="column" style="flex: 1;">
					<h1>In Crisis, Again</h1>
					<ul class="list">
						<li>
							<b>Information is Beautiful Awards 2022:</b>
							<a href="https://www.informationisbeautifulawards.com/showcase/5311-in-crisis-again"
								>Long List</a
							>
						</li>
						<li>
							<b>The Pudding Cup 2022:</b>
							<a href="https://pudding.cool/process/pudding-cup-2022/">Honorable Mention</a>
						</li>
						<li>
							<b>Buried Signals:</b>
							<a href="https://buriedsignals.com/spotlights/in-crisis">Featured Data Viz</a>
						</li>
					</ul>
					<button>
						<a href="https://github.com/m0llyc00k/Thesis-2022" class="link"
							>Visit GitHub Page & Documentation</a
						>
					</button>
					<p><a href="https://in-crisis-again.netlify.app/" class="link">Visit Site</a></p>
					<p>
						<em class="text"
							>* Please note that this site is not currently compatible with mobile or tablet
							devices.</em
						>
					</p>
					<div class="text">
						<p>
							Over a century before the widespread mis-marketing of OxyContin dominated news
							outlets, the nation grappled with its first widespread opioid epidemic. Both epidemics
							followed similar historical arcs of emergence, exploitation, and eruption. However,
							while the de-escalation of the 19th-century epidemic has become a distant memory,
							recovery from the most recent epidemic remains uncertain.
						</p>
						<p>
							During the initial epidemic, pharmaceutical companies and federal regulations laid the
							groundwork for the stigmatization of opioid addiction, fostering an isolating
							environment for those currently struggling with opioid dependence. Accessible recovery
							services, coupled with efforts to destigmatize addiction left by the earlier epidemic,
							are crucial to preventing future devastation and establishing a resilient system
							capable of averting history's repetition.
						</p>
						<p>
							To mitigate the escalating modern opioid crisis, it is imperative to comprehend the
							origins of the first epidemic, empathize with the physiological aspects of addiction,
							and ensure widespread availability of proven treatments such as Medication-Assisted
							Treatment (MAT). "In Crisis, Again" visualizes each of these crucial factors essential
							for the nation's recovery, illustrating the overwhelming grip of opioids on the United
							States since their inception.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.section {
		padding: 2em;
	}

	.container {
		max-width: 1100px;
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
		border: 1px solid #357a8e;
		border-radius: 2px;
		padding: 5px;
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
