<div class="projectContainer">
	<div class="projects">hello</div>
	<div class="projects">hello</div>
	<div class="projects">hello</div>
	<div class="projects">hello</div>
	<div class="projects">hello</div>
	<div class="projects">hello</div>
	<div class="projects">hello</div>
	<div class="projects">hello</div>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 1em;
		display: flex;
		justify-content: center;
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
	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 30px;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	@media (min-width: 900px) {
		h1 {
			font-size: 48px;
		}
	}
</style>
