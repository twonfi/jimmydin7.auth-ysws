<script>
	import {onMount} from "svelte";
	import {base} from "$app/paths";

	let tutorialPage = 0;

	let data = null;

	const tutorialsNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
	let tutorials = [];

	// Load JSON on component mount
	onMount(async () => {
		tutorials = await Promise.all(
			  tutorialsNames.map(i => fetch(`${base}/${i}.json`).then(res => res.json()))
	  );
	});
</script>
<div id="content">
<h1>Tutorial</h1>
	<div id="tutorial">
		{#if tutorials[tutorialPage]}
		  <h2>{tutorials[tutorialPage].title}</h2>
			<h3>{tutorials[tutorialPage].description}</h3>
		{:else}
		  <h2>Loading...</h2>
		{/if}
		<button id="tutorialButton" on:click={tutorialPage++}>Next -></button>
	</div>
</div>