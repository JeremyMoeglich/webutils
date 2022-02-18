<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import DragSymbol from './IO/drag_symbol.svelte';
	export let child_component: typeof SvelteComponent;
	export let name: string;
</script>

<div class="alignment">
	<div class="top">
		<DragSymbol />
		<p>{name}</p>
	</div>
	<div class="content">
		<svelte:component this={child_component} />
	</div>
</div>

<style lang="scss">
	$pad: 10px;
	$outer-pad: 15px;

	.alignment {
		background-color: rgba(96, 94, 116, 0.808);
		width: 100%;
		height: 100%;
		padding: $outer-pad;
		box-shadow: 2px 2px 5px rgb(18, 75, 122);
		border-radius: 5px;
	}
	.content {
		width: 100%;
		height: calc(100% - $pad - 1ex - $outer-pad/2);
		overflow: auto;
	}
	.top {
		display: flex;
		align-items: center;
		padding-bottom: $pad;
		gap: 10px;
		p {
			margin: 0px;
			font-weight: 600;
			color: white;
		}
	}
</style>
