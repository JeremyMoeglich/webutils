<script lang="ts">
	import { notes } from '$lib/stores/notes';
</script>

<div class="alignment">
	<div>
		<slot />
	</div>
	<div class="sidebar">
		<ul>
			{#each $notes as note}
				<li>{note.text}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.alignment {
		display: flex;
		justify-content: space-between;
	}
</style>
