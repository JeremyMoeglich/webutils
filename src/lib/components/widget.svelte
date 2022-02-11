<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let child_component: typeof SvelteComponent;
</script>

<div class="alignment">
    <svelte:component this={child_component} />
</div>

<style></style>