<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let child_component: typeof SvelteComponent;
</script>

<div class="alignment">
	<svelte:component this={child_component} />
</div>

<style>
	.alignment {
		background-color: rgb(210, 237, 255);
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.164);
		width: 100%;
		height: 100%;
		padding: 5px;
	}
</style>
