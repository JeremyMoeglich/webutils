<script lang="ts">
	import { notes } from '$lib/stores';
</script>

<div class="alignment">
	<div class="main_content">
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
		width: 100%;
		height: 100%;
	}
	.sidebar {
		width: 100px;
		height: 100vh;
		background-color: rgb(104, 104, 104);
	}
	:global(body) {
		margin: 0px;
		padding: 0px;
	}
	.main_content {
		width: 100%;
		height: 100%;
	}
	:global(*) {
		box-sizing: border-box;
	}
</style>
