<script lang="ts">
	// import Navbar from '$lib/components/NavBar.svelte';
	// import Button from '$lib/components/Button.svelte';
	// import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	// import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';
	import { customBackground } from '$lib/store';
	// import { Email } from '$lib/Constants.ts';
	// import routes from '$lib/NavRoutes';

	let copied = false;

	let Email = 'mollyc628@gmail.com';

	interface CssVariables {
		[name: string]: string;
	}

	const cssVariables = (
		node: HTMLElement,
		variables: CssVariables
	): { update: (variables: CssVariables) => void } => {
		setCssVariables(node, variables);

		return {
			update(variables: CssVariables) {
				setCssVariables(node, variables);
			}
		};
	};

	const setCssVariables = (node: HTMLElement, variables: CssVariables): void => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	};

	const copy = () => {
		navigator.clipboard.writeText(Email);
	};
</script>

<svelte:body use:cssVariables={{ background: $customBackground }} />

<Modal>
	<div slot="content" class="modalContainer">
		<h1>Email:</h1>
		<div>
			<p>{Email}</p>
			&nbsp;
			<div class="tooltip">
				<Tooltip tooltip={copied ? 'Copied' : 'Copy'}>
					<div
						id="clipboard"
						role="button"
						tabindex="0"
						on:keypress={() => {
							copied = true;
							copy();
							setTimeout(() => {
								copied = false;
							}, 500);
						}}
						on:click={() => {
							copied = true;
							copy();
							setTimeout(() => {
								copied = false;
							}, 500);
						}}
					>
						<!-- <div>
							<FaCopy />
						</div> -->
					</div>
				</Tooltip>
			</div>
		</div>
		<!-- <Button>Send Email</Button> -->
	</div>
</Modal>
<!-- <Navbar segment={$page.url.pathname} /> -->

<slot />

<footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap');

	* {
		box-sizing: border-box;
	}

	@font-face {
		font-family: 'Rubik', sans-serif;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
	}

	@font-face {
		font-family: 'Golos Text', sans-serif;
		font-style: normal;
		src: url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap');
	}

	:global(#svelte) {
		width: 100vw;
		height: 100%;
		/* max-width: 1020px; */

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		/* overflow: auto; */
		font-family: 'Golos Text', sans-serif;
		background-color: #eeeeee;
		box-sizing: border-box; /* Ensure padding is included in width calculations */
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: #363636;
		margin: 0;
		box-sizing: border-box;
		display: grid;
		/* line-height: 1.75; */
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: white;
		background: #999999;
	}

	/* :global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: none;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	} */

	@media (min-width: 900px) {
		:global(body) {
			/* padding: 0 1em 1em 1em; */
		}
	}

	:global(a) {
		text-decoration: none;
	}

	:global(a) {
		text-decoration: none;
	}

	a {
		color: rgb(0, 100, 200);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	a:visited {
		color: rgb(0, 80, 160);
	}

	.modalContainer div {
		display: flex;
		margin-bottom: 20px;
	}

	.modalContainer p {
		margin: 0;
	}

	:global(.tooltip) {
		visibility: hidden;
	}

	.cookieContainer {
		background: white;
		border-radius: 0px;
		text-align: center;
		width: 100%;
		height: 30px;
		color: black;
		padding: 30px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}
	.cookieContainer > p > a {
		text-decoration: underline;
	}

	.cookieContainer > div {
		cursor: pointer;
	}

	footer {
		font-size: 16px;
		font-weight: 400;
		padding: 30px 0;
		/* max-width: 900px; */
		text-align: center;
		width: 100%;
	}

	footer a {
		text-decoration: none;
		color: #4158d0;
	}
	/* footer .svelte {
		color: #ff3e00;
	}

	footer .me {
		color: #ff3e00;
	} */

	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
	@media (min-width: 600px) {
		.cookieContainer {
			background: white;
			border-radius: 50px;
			text-align: center;
			width: 350px;
			height: 30px;
			color: black;
			padding: 0 10px;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			position: fixed;
			bottom: 50px;
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
