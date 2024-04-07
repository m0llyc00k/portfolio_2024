<script>
	import PageTemplate from '$lib/components/PageTemplate.svelte';
</script>

<PageTemplate title="test">
	<div slot="col-1">
		<video controls class="video" id="thesis-video" preload="metadata" muted loop autoplay>
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
	</div>
	<div slot="col-2">
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
		<button><a href="https://in-crisis-again.netlify.app/" class="link">Visit Site</a></button>
		<p>
			<em class="text"
				>* Please note that this site is not currently compatible with mobile or tablet devices.</em
			>
		</p>
		<div class="text">
			<p>
				Over a century before the widespread mis-marketing of OxyContin dominated news outlets, the
				nation grappled with its first widespread opioid epidemic. Both epidemics followed similar
				historical arcs of emergence, exploitation, and eruption. However, while the de-escalation
				of the 19th-century epidemic has become a distant memory, recovery from the most recent
				epidemic remains uncertain.
			</p>
			<p>
				During the initial epidemic, pharmaceutical companies and federal regulations laid the
				groundwork for the stigmatization of opioid addiction, fostering an isolating environment
				for those currently struggling with opioid dependence. Accessible recovery services, coupled
				with efforts to destigmatize addiction left by the earlier epidemic, are crucial to
				preventing future devastation and establishing a resilient system capable of averting
				history's repetition.
			</p>
			<p>
				To mitigate the escalating modern opioid crisis, it is imperative to comprehend the origins
				of the first epidemic, empathize with the physiological aspects of addiction, and ensure
				widespread availability of proven treatments such as Medication-Assisted Treatment (MAT).
				"In Crisis, Again" visualizes each of these crucial factors essential for the nation's
				recovery, illustrating the overwhelming grip of opioids on the United States since their
				inception.
			</p>
		</div>
	</div>
</PageTemplate>

<style>
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
</style>
