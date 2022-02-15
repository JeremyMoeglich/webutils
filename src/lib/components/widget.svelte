<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let child_component: typeof SvelteComponent;
	export let name: string;
</script>

<div class="alignment">
	<p>{name}</p>
	<div class="content">
		<svelte:component this={child_component} />
	</div>
</div>

<style>
	.alignment {
		background-color: rgba(96, 94, 116, 0.808);
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.164);
		width: 100%;
		height: 100%;
		padding: 15px;
		box-shadow: 2px 2px 5px rgb(18, 75, 122);
		border-radius: 5px;
	}
	p {
		margin-top: 0px;
		font-weight: 600;
		color: white;
	}
</style>

