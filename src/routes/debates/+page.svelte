<script>
	import PageTemplate from '$lib/components/PageTemplate.svelte';
	let playbackRate = 3;
</script>

<PageTemplate title="Live Debate Trackers:">
	<div slot="col-1">
		<video
			controls
			bind:playbackRate
			class="video"
			id="thesis-video"
			preload="metadata"
			muted
			loop
			autoplay
		>
			<source
				src="https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/main/src/lib/assets/video/debate-clip.mp4"
				type="video/mp4"
			/>
			<track kind="captions" />
			Your browser does not support the video tag.
		</video>
		<!-- <img
			src="https://raw.githubusercontent.com/m0llyc00k/portfolio_2024/e68309fb58f51251f6c62d29fdbbc6650641c053/src/lib/assets/img/sketches/Molly_Thesis_Sketch.jpg"
			alt="a sketch of the project shown here"
			width="100%"
		/> -->
	</div>

	<div slot="col-2">
		<p class="text">
			I collaborated with a team consisting of developers, journalists, and editors to develop and
			build real-time dashboards for each Republican primary debate. Our process involved entering
			data and deploying a script to generate live charts. We meticulously monitored factors such as
			speaking duration, discussion topics, and the frequency of attacks from opponents.
		</p>
		<h2>Which Candidates Got the Most Speaking Time in the ...</h2>
		<ul class="list">
			<li class="link">
				<a
					href="https://www.nytimes.com/interactive/2023/08/23/us/politics/republican-debate-live-tracker.html"
					>First Republican Debate</a
				>
			</li>
			<li class="link">
				<a
					href="https://www.nytimes.com/interactive/2023/09/27/us/politics/second-republican-debate-live-tracker.html"
					>Second Republican Debate</a
				>
			</li>
			<li class="link">
				<a
					href="https://www.nytimes.com/interactive/2023/11/08/us/politics/third-republican-debate-live-tracker.html"
					>Third Republican Debate</a
				>
			</li>
		</ul>
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
</style>
